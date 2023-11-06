import { useEffect, useRef } from 'react';

const Menu = ({ isMenuOpen }) => {
  const menuContainerRef = useRef(null);

  useEffect(() => {
    menuContainerRef?.current?.classList.remove('menu__close');
  }, []);

  return (
    <menu
      className={`menu ${isMenuOpen ? 'menu__open' : 'menu__close'}`}
      ref={menuContainerRef}>
      <li className='menu__container'>
        <button className='menu__button menu__button_services'>Услуги</button>
      </li>
      <li className='menu__container'>
        <button className='menu__button menu__button_projects'>Проекты</button>
      </li>
      <li className='menu__container'>
        <button className='menu__button menu__button_built'>Построенное</button>
      </li>
      <li className='menu__container'>
        <button className='menu__button menu__button_useful'>Полезное</button>
      </li>
      <li className='menu__container'>
        <button className='menu__button menu__button_about'>О нас</button>
      </li>
      <li className='menu__container'>
        <button className='menu__button menu__button_contacts'>Контакты</button>
      </li>
    </menu>
  );
};
export default Menu;
