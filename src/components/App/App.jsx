import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header';
import BusinessCard from '../BusinessCard/BusinessCard';
import OfferCard from '../OfferCard/OfferCard';

const App = () => {
  return (
    <>
      <Navigation />
      <Header />
      <section className='container about-us'>
        <h2 className='about-us__heading'>Nasi specjaliści</h2>

        <div className='about-us__wrapper'>
          <BusinessCard />
        </div>
      </section>

      <section className='offer'>
        <div className='offer__wrapper'>
          <h2 className='offer__heading'>Czym zajmuje się nasza firma?</h2>

          <article className='offer__container'>
            <OfferCard />
          </article>
        </div>
      </section>
    </>
  );
};

export default App;
