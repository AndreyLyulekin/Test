import { useEffect, useRef } from 'react';

import { Info, SwiperModule } from './index.js';

const Section = ({ sectionNumber, observer }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;

    if (!sectionElement || !observer) return;

    observer.observe(sectionElement);

    return () => sectionElement && observer.observe(sectionElement);
  }, [observer]);

  return (
    <section
      className={`emptySection emptySection-${sectionNumber}`}
      id={sectionNumber}
      ref={sectionRef}>
      {sectionNumber === 1 && (
        <>
          <SwiperModule />
          <Info />
        </>
      )}
    </section>
  );
};

export default Section;
