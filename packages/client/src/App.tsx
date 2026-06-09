import { Suspense } from 'react';
import './App.css';
import Container from './components/Container';
import Header from './components/Header';
import Main from './components/Main';
import PageWrapper from './components/PageWrapper';
import { LoaderCircle } from 'lucide-react';
import { ErrorBoundary } from 'react-error-boundary';
import type { AppError } from './types/error';

function App() {
   return (
      <PageWrapper>
         <Container>
            <Header />
            <ErrorBoundary
               fallbackRender={({ error }) => {
                  const err = error as AppError;

                  return (
                     <div className="mt-12 bg-red-100 p-6 shadow ring ring-black/5">
                        <p className="text-red-500">
                           {err.message}: {err.details}
                        </p>
                     </div>
                  );
               }}
            >
               <Suspense
                  fallback={
                     <div className="mt-12 grid h-48 place-items-center">
                        <LoaderCircle className="animate-spin stroke-slate-300" />
                     </div>
                  }
               >
                  <Main />
               </Suspense>
            </ErrorBoundary>
         </Container>
      </PageWrapper>
   );
}

export default App;
