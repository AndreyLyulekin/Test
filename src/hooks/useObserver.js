import { useState, useEffect } from 'react';

import { intersectionCallback } from '../components/index.js';
const useObserver = () => {
  const [observer, setObserver] = useState();
  const [currentSectionColor, setCurrentSectionColor] = useState('transparent');

  const handleIntersection = (entries) => intersectionCallback(entries, setCurrentSectionColor);

  useEffect(() => {
    let options = {
      root: null,
      threshold: [0.1, 0.9],
    };
    const observer = new IntersectionObserver(handleIntersection, options);
    setObserver(observer);

    return () => {
      if (!observer) return;

      observer.disconnect();
      setObserver(null);
    };
  }, []);

  return { observer, currentSectionColor };
};

export default useObserver;
