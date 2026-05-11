import React from 'react';
import MainText from '../typography/MainText';

const BenefitCard = ({ bgImg, title, subtitle }) => {
  return (
    <div
      className={`${bgImg} relative flex h-[400px] w-full items-end justify-center bg-cover bg-top bg-no-repeat`}
    >
      <div className="absolute bottom-10 flex flex-col gap-4 px-[30px]">
        <MainText
          text={title}
          color={'text-white'}
          size={'text-[18px]'}
          textLeft={true}
          bold
        />
        <MainText text={subtitle} color={'text-white/60'} textLeft={true} />
      </div>
    </div>
  );
};

export default BenefitCard;
