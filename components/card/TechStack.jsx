import React from 'react';
import ImageWrapper from '../Wrappers/ImageWrapper';
import MainText from '../typography/MainText';

const TechStack = ({ icon, title }) => {
  return (
    <div
      className={`h-full rounded-[10px] bg-darkGray p-[10px] shadow-custom-secondary md:rounded-[20px] md:p-[20px]`}
    >
      <div className="flex flex-col items-center justify-center gap-4 md:gap-8">
        <ImageWrapper
          src={icon}
          alt={`MaskHr ${title}`}
          width={100}
          height={100}
          style={'bg-contain bg-no-repeat bg-center'}
        />
        <MainText text={title} color={'text-white'} />
      </div>
    </div>
  );
};

export default TechStack;
