import { useState, useCallback, lazy, Suspense } from 'react';
import { Loader } from './components/Loader';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { ScrollProgress } from './components/ScrollProgress';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';

// Lazy-load below-the-fold sections for better initial load performance
const Projects = lazy(() => import('./components/Projects').then(m => ({ default: m.Projects })));
const About = lazy(() => import('./components/About').then(m => ({ default: m.About })));
const Skills = lazy(() => import('./components/Skills').then(m => ({ default: m.Skills })));
const Journey = lazy(() => import('./components/Journey').then(m => ({ default: m.Journey })));
const Publications = lazy(() => import('./components/Publications').then(m => ({ default: m.Publications })));
const GitHubActivity = lazy(() => import('./components/GitHubActivity').then(m => ({ default: m.GitHubActivity })));
const Contact = lazy(() => import('./components/Contact').then(m => ({ default: m.Contact })));

export default function App() {
  const [loaded, setLoaded] = useState(false);

  const handleLoadComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <Loader onComplete={handleLoadComplete} />
      {loaded && (
        <>
          <CustomCursor />
          <Navbar />
          <ScrollProgress />
          <main>
            <Hero />
            <Suspense fallback={null}>
              <Projects />
              <About />
              <Skills />
              <Journey />
              <Publications />
              <GitHubActivity />
              <Contact />
            </Suspense>
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
