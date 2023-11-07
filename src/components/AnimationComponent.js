import { useRef, useEffect, useState } from 'react';
import lottie from 'lottie-web';

import { animationData } from './index';

const AnimationComponent = ({ toggleMenu, isSectionWhite }) => {
  const animationContainerRef = useRef(null);
  const [isPlaying, setPlaying] = useState(false);
  const [animationDirection, setAnimationDirection] = useState(1);

  const handleClick = () => {
    setPlaying((prevIsPlaying) => !prevIsPlaying);
    setAnimationDirection((prevAnimationDirection) => (prevAnimationDirection === 1 ? -1 : 1));
    toggleMenu();
  };

  const forwardAnim = (anim) => {
    anim.setSpeed(2.5);
    anim.playSegments([0, anim.totalFrames], true);
  };
  const backwardAnim = (anim) => {
    anim.setSpeed(-2.5);
    anim.playSegments([anim.totalFrames, 0], true);
  };

  useEffect(() => {
    const animationContainer = animationContainerRef.current;
    if (!animationContainer) return;

    const anim = lottie.loadAnimation({
      container: animationContainer,
      renderer: 'svg',
      loop: false,
      autoplay: isPlaying,
      animationData: animationData,
    });

    animationDirection === -1 ? forwardAnim(anim) : backwardAnim(anim);

    return () => anim.destroy();
  }, [isPlaying, animationDirection]);

  return (
    <div
      ref={animationContainerRef}
      onClick={handleClick}
      className={`footer__animation`}
      style={{
        filter: isSectionWhite ? 'brightness(0.1)' : '',
      }}
    />
  );
};

export default AnimationComponent;
