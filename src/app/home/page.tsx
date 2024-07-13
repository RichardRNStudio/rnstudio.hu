import Container from '@/components/Container/Container';
import Profile from './Profile/Profile';
import AboutMe from './AboutMe/AboutMe';
import Work from './Work/Work';

const Home = () => (
  <Container>
    <Profile />
    <AboutMe />
    <Work />
  </Container>
);

export default Home;
