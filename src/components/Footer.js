import { useState, useEffect } from 'react';

import { AnimationComponent, Logo, Menu, footerThemes } from './index.js';

const Footer = ({ footerColorTheme }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [currentColorTheme, setCurrentColorTheme] = useState(footerThemes[0]);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setCurrentColorTheme(footerThemes[footerColorTheme - 1]);
  }, [footerColorTheme]);

  useEffect(() => {
    isMenuOpen ? setCurrentColorTheme(footerThemes[1]) : setCurrentColorTheme(footerThemes[footerColorTheme - 1]);
  }, [footerColorTheme, isMenuOpen]);

  return (
    <footer
      className={`footer ${isMenuOpen ? 'footer_open' : ''}`}
      style={{
        backgroundColor: isMenuOpen ? '' : currentColorTheme.footerBgColor,
        border: `2px solid ${currentColorTheme.footerBorderColor}`,
      }}>
      <Menu isMenuOpen={isMenuOpen} />
      <AnimationComponent toggleMenu={toggleMenu} />
      <div className='logo__container'>
        <Logo
          isMenuOpen={isMenuOpen}
          footerTxtColor={currentColorTheme.footerTxtColor}
        />
        <span>
          <a
            style={{
              color: currentColorTheme.footerTxtColor,
            }}
            className={`footer__contact_base ${isMenuOpen ? 'footer__contact_number' : ''}`}
            href='tel:+73432195195'>
            +7 3432-195-195
          </a>
        </span>
      </div>
      <button
        className={`footer__contact_button ${isMenuOpen ? 'footer__contact' : ''}`}
        style={{
          backgroundColor: isMenuOpen ? 'inherit' : currentColorTheme.footerBgColor,
          outline: `1px solid ${currentColorTheme.footerBorderColor}`,
          color: currentColorTheme.footerTxtColor,
        }}>
        Оставить заявку
      </button>
    </footer>
  );
};

export default Footer;
