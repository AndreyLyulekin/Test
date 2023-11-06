import { useState, useEffect } from 'react';
import { Footer, Info, SwiperModule, Preloader } from './components/index.js';

const App = () => {
  const [currentSection, setCurrentSection] = useState('section1');
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { root: null, threshold: [0.1, 0.9] }
    );

    setTimeout(() => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => observer.observe(section));
    }, '1010');
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setIsPageLoaded(true);
    }, '1000');
  }, []);

  return (
    <>
      {isPageLoaded ? (
        <>
          <section id='section1'>
            <SwiperModule />
            <Info />
          </section>
          <Footer currentSection={currentSection} />
          <section
            id='section2'
            className='emptySection'
          />
          <section
            id='section3'
            className='emptySection'
          />
        </>
      ) : (
        <Preloader />
      )}
    </>
  );
};

export default App;
