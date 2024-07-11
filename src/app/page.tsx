import Container from '@/components/Container/Container';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

const Home = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Container>
          <h1 className="text-3xl">Hello World</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Home;
