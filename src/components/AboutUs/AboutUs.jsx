import BusinessCards from '../BusinessCards/BusinessCards';
import specialists from '../../data/specialists';

const AboutUs = () => {
  return (
    <section className='container about-us' id='about-us'>
      <h2 className='about-us__heading'>Nasi specjaliści</h2>
      <BusinessCards specialists={specialists} />
    </section>
  );
};

export default AboutUs;
