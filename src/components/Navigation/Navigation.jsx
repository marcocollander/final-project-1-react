const Navigation = () => {
  return (
    <nav className='nav' id='nav'>
      <div className='nav__wrapper'>
        <div className='nav__logo'>
          <a className='nav__link' href='#nav'>
            moja firma
          </a>
        </div>

        <div className='nav__links nav__links--hidden'>
          <a className='nav__links-item' href='#about-us'>
            o nas
          </a>
          <a className='nav__links-item' href='#offer'>
            oferta
          </a>
          {/*eslint-disable-next-line*/}
          <a className='nav__links-item'>kontakt</a>
        </div>

        <button className='nav__btn'>
          <span className='nav__btn-item' />
          <span className='nav__btn-item' />
          <span className='nav__btn-item' />
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
