import './App.css';
import Container from './components/Container';
import Header from './components/Header';
import PageWrapper from './components/PageWrapper';

const App = () => {
  return (
    <PageWrapper>
      <Container>
        <Header />
      </Container>
    </PageWrapper>
  );
};

export default App;
