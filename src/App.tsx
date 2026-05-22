import './App.css';
import Container from './components/Container';
import Header from './components/Header';
import Main from './components/Main';
import PageWrapper from './components/PageWrapper';

const App = () => {
  return (
    <PageWrapper>
      <Container>
        <Header />
        <Main />
      </Container>
    </PageWrapper>
  );
};

export default App;
