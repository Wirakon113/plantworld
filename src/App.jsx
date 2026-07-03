import { Suspense, lazy } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LoadingFallback from './components/LoadingFallback';

const About = lazy(() => import('./components/About'));
const Highlights = lazy(() => import('./components/Highlights'));
const EventInfo = lazy(() => import('./components/EventInfo'));
const TimelineSection = lazy(() => import('./components/TimelineSection'));
const Gallery = lazy(() => import('./components/Gallery'));
const Statistics = lazy(() => import('./components/Statistics'));
const VisitorGuide = lazy(() => import('./components/VisitorGuide'));
const FAQ = lazy(() => import('./components/FAQ'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

const App = () => {
  return (
    <ErrorBoundary>
      <Navbar />
      <Hero />
      <Suspense fallback={<LoadingFallback />}>
        <About />
        <Highlights />
        <EventInfo />
        <TimelineSection />
        <Gallery />
        <Statistics />
        <VisitorGuide />
        <FAQ />
        <Contact />
        <Footer />
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
