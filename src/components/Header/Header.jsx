const Header = () => {
  return (
    <header className='header'>
      <div className='header__shadow' />
      <div className='header__wrapper'>
        <h1 className='header__heading'>Nasza firma oferuje</h1>
        <h2 className='header__heading'>najwyższej jakości</h2>
        <h3 className='header__heading'>produkty</h3>
        <p className='header__text'>Nie wierz nam na słowo - sprawdź</p>
        <a className='header__btn' href='#offer'>
          oferta
        </a>
      </div>
      <p className='header__image-author'>
        Obraz
        <a
          className='header__link-to-author'
          target='_blank'
          rel='noreferrer'
          href='https://pixabay.com/pl/users/startupstockphotos-690514/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=593361'
        >
          StartupStockPhotos
        </a>
        z
        <a
          className='header__link-to-author'
          target='_blank'
          rel='noreferrer'
          href='https://pixabay.com/pl/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=593361'
        >
          Pixabay
        </a>
      </p>
    </header>
  );
};

export default Header;
