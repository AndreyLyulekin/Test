import React from 'react';

export default function Menu({ isMenuOpen }) {
  return (
    <menu className={`menu ${isMenuOpen ? 'open' : ''}`}>
      <button className='menu__button menu__button_services'>Услуги</button>
      <button className='menu__button menu__button_projects'>Проекты</button>
      <button className='menu__button menu__button_built'>Построенное</button>
      <button className='menu__button menu__button_useful'>Полезное</button>
      <button className='menu__button menu__button_about'>О нас</button>
      <button className='menu__button menu__button_contacts'>Контакты</button>
    </menu>
  );
}
