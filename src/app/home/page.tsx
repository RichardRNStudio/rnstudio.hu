import Container from '@/components/Container/Container';
import Profile from './Profile/Profile';
import AboutMe from './AboutMe/AboutMe';
import Work from './Work/Work';
import ProjectSummary from './ProjectSummary/ProjectSummary';

const Home = () => (
  <Container>
    <Profile />
    <AboutMe />
    <Work />
    <ProjectSummary />
  </Container>
);

export default Home;
