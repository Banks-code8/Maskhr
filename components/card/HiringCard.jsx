import React from 'react';
import ImageWrapper from '../Wrappers/ImageWrapper';
import MainText from '../typography/MainText';

const HiringCard = ({ rate, title, bgImg, subtitle, cardType = 'type1' }) => {
  return (
    <div>
      {/* Card Type 1 */}
      {cardType === 'type1' && (
        <div className="flex h-full flex-col items-center justify-center gap-4 rounded-[10px] bg-lightGray p-[20px] shadow-custom-secondary md:gap-8 md:rounded-[20px] md:p-[30px]">
          <h1 className="font-lato text-center text-[18px] font-semibold leading-[20px] tracking-normal md:text-[22px] md:leading-[32px] lg:text-[32px]">
            {title}
          </h1>
          <div>
            {rate && (
              <div className="rounded-[10px] bg-primary px-[30px] py-[20px] text-[32px] font-semibold text-white md:text-[40px]">
                {rate}
              </div>
            )}
          </div>

          {bgImg && (
            <ImageWrapper
              src={bgImg}
              alt={`MaskHr Hiring ${title}`}
              width={300}
              height={100}
              style="bg-contain bg-no-repeat bg-center mx-auto "
            />
          )}
          <MainText text={subtitle} color="text-secondary" />
        </div>
      )}

      {/* Card Type 2 */}
      {cardType === 'type2' && (
        <div className="grid h-full items-center justify-center gap-4 rounded-[10px] bg-lightGray p-[20px] shadow-custom-secondary md:grid-cols-2 md:rounded-[20px] md:p-[30px]">
          <div className="flex h-full flex-col justify-between gap-4">
            {' '}
            <h1 className="font-lato text-center text-[18px] font-semibold leading-[20px] tracking-normal md:text-left md:text-[22px] md:leading-[32px] lg:text-[32px]">
              {title}
            </h1>
            <MainText
              text={subtitle}
              color="text-secondary"
              textLeft={true}
            />{' '}
          </div>
          <ImageWrapper
            src={bgImg}
            alt={`MaskHr Hiring ${title}`}
            width={200}
            height={100}
            style=" bg-cover bg-no-repeat bg-center mx-auto"
          />
        </div>
      )}
    </div>
  );
};

export default HiringCard;
