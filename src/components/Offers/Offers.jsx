import OfferCards from '../OfferCards/OfferCards';
import offers from '../../data/offers';

const Offers = () => {
  return (
    <section className='offer'>
      <div className='offer__wrapper'>
        <h2 className='offer__heading'>Czym zajmuje się nasza firma?</h2>

        <article className='offer__container'>
          <OfferCards offers={offers} />
        </article>
      </div>
    </section>
  );
};

export default Offers;
