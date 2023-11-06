import { useEffect, useRef } from 'react';

import { menuContainers } from './index.js';

const Menu = ({ isMenuOpen }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    menuRef?.current?.classList.remove('menu__close');
  }, []);

  return (
    <div style={{ overflow: 'hidden' }}>
      <menu
        className={`menu ${isMenuOpen ? 'menu__open' : 'menu__close'}`}
        ref={menuRef}>
        {menuContainers.map((i, index) => (
          <li
            key={index}
            className='menu__container'>
            <button
              className={`menu__button ${i.className}`}
              key={i.text}>
              {i.text}
            </button>
          </li>
        ))}
      </menu>
    </div>
  );
};
export default Menu;
