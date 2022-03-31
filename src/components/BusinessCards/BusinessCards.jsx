import _ from 'lodash';

const BusinessCards = ({ specialists }) => {
  return (
    <div className='about-us__wrapper'>
      {_.take(
        specialists.map(({ id, name, description, branch }) => (
          <article key={id} className='about-us__branch'>
            <div className='about-us__image' />
            <aside className='about-us__person'>
              <h3 className='about-us__person-heading'>
                {name}
                {branch}
              </h3>
              <p className='about-us__text'>{description}</p>
            </aside>
          </article>
        )),
        4
      )}
    </div>
  );
};

export default BusinessCards;
