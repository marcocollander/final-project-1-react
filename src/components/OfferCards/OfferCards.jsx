import _ from 'lodash';

const OfferCards = ({ offers }) => {
  return (
    <article className='offer__container' id='offer'>
      {_.take(
        offers.map(({ id, service, isNovelty }) => (
          <div key={id} className='offer__item'>
            {isNovelty ? (
              <>
                <div className='item-new-symbol' />
                <div className='offer__item-new'>
                  <h3 className='offer__item-heading'>{service}</h3>
                  <h4 className='offer__item-heading-new'>(nowość)</h4>
                </div>
              </>
            ) : (
              <h3 className='offer__item-heading'>{service}</h3>
            )}
          </div>
        )),
        6
      )}
    </article>
  );
};

export default OfferCards;
