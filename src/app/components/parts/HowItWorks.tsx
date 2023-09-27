import Image from 'next/image';
import CtaButtons from './CtaButtons';
import Steps from './Steps';

const HowItWorks = () => {
  return (
    <section className='py-24 bg-light-tertiary'>
      <div className='container flex items-center justify-between'>
        <div className='how-it-work-left w-[45%]'>
          <Image
            src={'/assets/how-it-works-image.webp'}
            alt={'Clean bedroom with open window'}
            width={562}
            height={509}
          />
        </div>
        <div className='how-it-work-right w-[45%] flex flex-col text-light-primaryContainer gap-y-7'>
          <h2 className='text__display-medium text-light-surface'>How it works</h2>
          <Steps />
          <CtaButtons />
        </div>
      </div>
    </section>
  );
};
export default HowItWorks;
