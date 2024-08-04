import Container from '../_components/Container/Container';
import {
  GITHUB_SOCIAL_URL,
  LINKED_IN_SOCIAL_URL,
  WEBSITE,
  X_SOCIAL_URL,
} from '../_shared/config';
import AboutMe from './_components/About/About';
import Profile from './_components/Profile/Profile';
import Projects from './_components/Projects/Projects';
import Work from './_components/Work/Work';
import { SocialProfileJsonLd } from 'next-seo';

const Home = () => (
  <>
    <SocialProfileJsonLd
      useAppDir
      type="Person"
      name="Richárd Nagy"
      url={WEBSITE}
      sameAs={[GITHUB_SOCIAL_URL, X_SOCIAL_URL, LINKED_IN_SOCIAL_URL]}
    />
    <Container>
      <Profile />
      <AboutMe />
      <Work />
      <Projects />
    </Container>
  </>
);

export default Home;
