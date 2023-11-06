import { useRef, useEffect, useState } from 'react';
import lottie from 'lottie-web';

import { animationData } from './index';

const AnimationComponent = ({ toggleMenu }) => {
  const animationContainerRef = useRef(null);
  const [isPlaying, setPlaying] = useState(false);
  const [animationDirection, setAnimationDirection] = useState(1);

  const handleClick = () => {
    setPlaying((prevIsPlaying) => !prevIsPlaying);
    setAnimationDirection((prevAnimationDirection) => (prevAnimationDirection === 1 ? -1 : 1));
    toggleMenu();
  };

  useEffect(() => {
    const animationContainer = animationContainerRef.current;
    if (animationContainer) {
      const anim = lottie.loadAnimation({
        container: animationContainer,
        renderer: 'svg',
        loop: false,
        autoplay: isPlaying,
        animationData: animationData,
      });
      if (animationDirection === -1) {
        anim.setSpeed(2.5);
        anim.playSegments([0, anim.totalFrames], true);
      } else {
        anim.setSpeed(-2.5);
        anim.playSegments([anim.totalFrames, 0], true);
      }
      return () => anim.destroy();
    }
  }, [isPlaying, animationDirection]);

  return (
    <div
      ref={animationContainerRef}
      onClick={handleClick}
      className='footer__animation'
    />
  );
};

export default AnimationComponent;