import Container from '../Container/Container';

const Footer = () => {
  return (
    <footer className="border-neutral-500 border-t border-opacity-30">
      <Container className="min-h-16 flex items-center">
        <div>Richárd Nagy © {new Date().getFullYear()}</div>
        <div></div>
      </Container>
    </footer>
  );
};

export default Footer;
