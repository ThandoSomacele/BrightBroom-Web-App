import CtaLinks from '../parts/CtaLinks';

const CtaBanner = () => {
  return (
    <section className='py-16 bg-light-primary text-light-onPrimary'>
      <div className='container flex w-10/12 items-center justify-between'>
        <p className='text__display-medium  w-6/12'>
          Experience simple today,
          <br />
          book your cleaner with
          <br />
          BrightBroom
        </p>
        <div className='w-4/12'>
          <CtaLinks />
        </div>
      </div>
    </section>
  );
};
export default CtaBanner;
