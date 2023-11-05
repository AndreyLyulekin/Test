import AnimationComponent from './AnimationComponent.js';
import Logo from './logo.js';
import Menu from './Menu.js';

import { useState, useEffect } from 'react';

function Footer({ currentSection }) {
  const [colorTheme, setColorTheme] = useState('inherit');
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    if (currentSection === '') {
      return;
    } else {
      currentSection !== 'section1' ? setColorTheme('#293743') : setColorTheme('inherit');
    }
  }, [currentSection]);
  return (
    <footer
      className={`footer ${isMenuOpen ? 'footerOpen' : ''}`}
      style={{ backgroundColor: isMenuOpen ? '' : colorTheme }}>
      <Menu isMenuOpen={isMenuOpen} />
      <AnimationComponent toggleMenu={toggleMenu} />
      <div className='logo__container'>
        <Logo />
        <span>
          <a href='tel:+73432195195'>+7 3432-195-195</a>
        </span>
      </div>
      <button
        style={{ backgroundColor: isMenuOpen ? 'inherit' : colorTheme }}
        className='footer__contact_button'>
        Оставить заявку
      </button>
    </footer>
  );
}

export default Footer;
