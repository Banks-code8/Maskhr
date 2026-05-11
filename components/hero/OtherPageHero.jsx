import React from 'react';
import MainText from '../typography/MainText';

const OtherPageHero = ({ title, subtitle }) => {
  return (
    <section className="h-[80vh] bg-herobg bg-cover bg-bottom bg-no-repeat">
      <div className="flex h-full flex-col items-center justify-center gap-4 px-[6vw] text-center">
        <h1 className="font-lato text-[50px] font-bold leading-[50px] tracking-normal">
          {title}
        </h1>
        <div className="">
          <MainText text={subtitle} color="text-mainBlack/50" />
        </div>
      </div>
    </section>
  );
};

export default OtherPageHero;
