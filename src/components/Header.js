import Link from '../assets/images/link.png';
function Header({ logo, text, link }) {
  return (
    <header className='header'>
      <div className='header__block_logo'>
        <img
          className='header__logo'
          src={logo}
          alt='smth'></img>
        <h2 className='header__text'>{text}</h2>
      </div>
      <>
        <a
          href={'dsvdv'}
          className='header__link'>
          О проекте
          <img
            className='header__link_img'
            src={Link}
            alt='Ссылка О проекте'></img>
        </a>
      </>
    </header>
  );
}

export default Header;
