import lottie from 'lottie-web';
import animationData from '../assets/lotties/Frame1321315073.json';

import React, { useRef, useEffect, useState } from 'react';

const AnimationComponent = ({ toggleMenu }) => {
  const animationContainer = useRef(null);
  const [isPlaying, setPlaying] = useState(false);
  const [animationDirection, setAnimationDirection] = useState(1);

  const handleClick = () => {
    setPlaying(!isPlaying);
    setAnimationDirection(animationDirection === 1 ? -1 : 1);
    toggleMenu();
  };

  useEffect(() => {
    if (animationContainer.current) {
      const anim = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: false,
        autoplay: isPlaying,
        animationData: animationData,
      });
      if (animationDirection === -1) {
        anim.setSpeed(1);
        anim.playSegments([0, anim.totalFrames], true);
      } else {
        anim.setSpeed(-1);
        anim.playSegments([anim.totalFrames, 0], true);
      }
      return () => anim.destroy();
    }
  }, [animationDirection, isPlaying]);

  return (
    <div
      ref={animationContainer}
      onClick={handleClick}
      className='footer__animation'
    />
  );
};

export default AnimationComponent;
