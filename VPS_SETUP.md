# VPS Setup Guide

## Prerequisites

- Ubuntu/Debian VPS
- Domain DNS A records pointing to VPS IP
- Hosting provider must allow your domain (e.g. register `rnstudio.hu` in their panel)

## 1. Install Git

```bash
sudo apt-get update
sudo apt-get install -y git
git --version
```

## 2. Install Node.js 20

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo bash -
sudo apt-get install -y nodejs
node -v
```

## 3. Install Yarn

```bash
corepack enable
corepack prepare yarn@stable --activate
yarn -v
```

## 4. Install PM2

```bash
npm install -g pm2
pm2 -v
```

## 5. Add Swap (needed for VPS with ≤1GB RAM)

```bash
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
free -h
```

## 6. Clone the Repo

```bash
cd ~
git clone <your-repo-url> rnstudio.hu
cd rnstudio.hu
```

## 7. Create Environment File

```bash
cp .env.sample .env.local
nano .env.local
```

Set these values:

```
G_USER=<your-github-username>
G_TOKEN=<your-github-personal-access-token>
```

Save: `Ctrl+O`, `Enter`, `Ctrl+X`

## 8. Install Dependencies and Build

```bash
yarn install
yarn build
```

## 9. Start with PM2

```bash
pm2 start yarn --name "nextjs-app" -- start
pm2 save
pm2 startup
```

`pm2 startup` prints a `sudo` command — copy and run it so the app auto-starts after reboot.

Verify: `pm2 status` should show `nextjs-app` as `online`.

## 10. Install and Configure Nginx

```bash
sudo apt-get install -y nginx
sudo rm -f /etc/nginx/sites-enabled/default
```

Create the site config:

```bash
sudo tee /etc/nginx/sites-available/rnstudio.hu > /dev/null << 'EOF'
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    server_name rnstudio.hu www.rnstudio.hu;

    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
EOF
```

Enable and restart:

```bash
sudo ln -s /etc/nginx/sites-available/rnstudio.hu /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

## 11. Set Up SSL with Let's Encrypt

```bash
sudo apt-get install -y certbot python3-certbot-nginx
sudo certbot --nginx -d rnstudio.hu -d www.rnstudio.hu
sudo certbot renew --dry-run
```

## 12. Add SSH Key for CI/CD

```bash
mkdir -p ~/.ssh
chmod 700 ~/.ssh
nano ~/.ssh/authorized_keys
```

Paste the public key matching the `SSH_PRIVATE_KEY` GitHub secret, then save.

```bash
chmod 600 ~/.ssh/authorized_keys
```

## GitHub Secrets Required

| Secret           | Value                              |
| ---------------- | ---------------------------------- |
| `G_USER`         | GitHub username                    |
| `G_TOKEN`        | GitHub personal access token       |
| `SSH_PRIVATE_KEY` | Private SSH key for VPS access    |
| `SSH_VPS_IP`     | VPS IP address                     |
| `SSH_USER`       | SSH username on the VPS            |
| `ACTIONS_PAT`    | PAT for auto version bump pushes   |

## Manual Deploy (without CI)

```bash
ssh user@your-vps
cd rnstudio.hu
git pull origin main
yarn install
yarn build
pm2 restart nextjs-app
```

## Automated Deploy

Creating a GitHub Release triggers the deploy workflow, which SSHes into the VPS and runs pull/install/build/restart automatically.
