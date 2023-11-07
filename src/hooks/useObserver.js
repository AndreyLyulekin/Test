import { useState, useEffect } from 'react';

import { intersectionCallback } from '../components/index.js';

const useObserver = () => {
  const [observer, setObserver] = useState();
  const [footerColorTheme, setFooterColorTheme] = useState(1);

  const handleIntersection = (entries) => intersectionCallback(entries, setFooterColorTheme);

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

  return { observer, footerColorTheme };
};

export default useObserver;
