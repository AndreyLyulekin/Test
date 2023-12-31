import { useState, useEffect } from 'react';

import { Footer, Preloader, useObserver, Section } from './components/index.js';

const App = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const { observer, footerColorTheme } = useObserver();

  const sections = Array.from(Array(3), (e, i) => i + 1);

  useEffect(() => {
    setTimeout(() => {
      setIsPageLoaded(true);
    }, 1000);
  }, []);

  return (
    <>
      {isPageLoaded ? (
        <>
          {sections.map((sectionNumber) => (
            <Section
              sectionNumber={sectionNumber}
              key={sectionNumber}
              observer={observer}
            />
          ))}
          <Footer footerColorTheme={footerColorTheme} />
        </>
      ) : (
        <Preloader />
      )}
    </>
  );
};

export default App;
