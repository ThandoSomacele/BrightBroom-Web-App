import React from 'react';
import CtaLinks from '@/app/ui/elements/CtaLinks';

function IntroHome() {
  return (
    <section id="intro-home" className="bg-palettes-primary-99 py-10 md:py-16">
      <div className="container flex flex-col items-center gap-6">
        <h2 className="text__display-small md:text__display-medium text-center ">
          Welcome to BrightBroom
        </h2>
        <p className="text-center text-base md:text-lg">
          Welcome to BrightBroom, where cleanliness meets simplicity. We
          understand the demands of modern life, and we&apos;re here to make one
          aspect of it easier &ndash; keeping your home spotless. With just a
          few clicks, you can book a professional cleaner for a day or even on a
          weekly basis, without any obligations.
        </p>
        <CtaLinks styleClasses={''} />
      </div>
    </section>
  );
}
export default IntroHome;
