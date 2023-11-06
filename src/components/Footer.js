import { useState, useEffect } from 'react';

import { AnimationComponent, Logo, Menu } from './index.js';

const Footer = ({ currentSection }) => {
  const [colorTheme, setColorTheme] = useState('inherit');
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    if (currentSection === '') return;

    currentSection !== 'section1' ? setColorTheme('#293743') : setColorTheme('inherit');
  }, [currentSection]);

  return (
    <footer
      className={`footer ${isMenuOpen ? 'footer_open' : ''}`}
      style={{ backgroundColor: isMenuOpen ? '' : colorTheme }}>
      <Menu isMenuOpen={isMenuOpen} />
      <AnimationComponent toggleMenu={toggleMenu} />
      <div className='logo__container'>
        <Logo isMenuOpen={isMenuOpen} />
        <span>
          <a
            className={`footer__contact_base ${isMenuOpen ? 'footer__contact_number' : ''}`}
            href='tel:+73432195195'>
            +7 3432-195-195
          </a>
        </span>
      </div>
      <button
        className={`footer__contact_button ${isMenuOpen ? 'footer__contact' : ''}`}
        style={{ backgroundColor: isMenuOpen ? 'inherit' : colorTheme }}>
        Оставить заявку
      </button>
    </footer>
  );
};

export default Footer;
