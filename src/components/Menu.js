import { useEffect, useRef } from 'react';

import { menuContainers } from './index.js';

const Menu = ({ isMenuOpen }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    menuRef?.current?.classList.remove('menu__close');
  }, []);

  return (
    <menu
      className={`menu ${isMenuOpen ? 'menu__open' : 'menu__close'}`}
      ref={menuRef}>
      {menuContainers.map((i) => (
        <li className='menu__container'>
          <button className={`menu__button ${i.className}`}>{i.text}</button>
        </li>
      ))}
    </menu>
  );
};
export default Menu;
