import { useState } from 'react';

import { AnimationComponent, Logo, Menu } from './index.js';

const Footer = ({ currentSectionColor }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <footer
      className={`footer ${isMenuOpen ? 'footer_open' : ''}`}
      style={{ backgroundColor: isMenuOpen ? '' : currentSectionColor }}>
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
        style={{ backgroundColor: isMenuOpen ? 'inherit' : currentSectionColor }}>
        Оставить заявку
      </button>
    </footer>
  );
};

export default Footer;
