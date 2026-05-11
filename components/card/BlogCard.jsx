import React from 'react';
import MainText from '../typography/MainText';
import Link from 'next/link';
import ImageWrapper from '../Wrappers/ImageWrapper';

const BlogCard = ({ heading, bgImg, subtitle, btnLink, btnText, title }) => {
  return (
    <div className="flex h-full flex-col gap-4">
      <MainText text={heading} textLeft={true} bold={true} />
      {/*  card container */}
      <div
        className={`flex h-full flex-col justify-between overflow-hidden rounded-[20px] bg-white shadow-custom-secondary`}
      >
        {/* image */}
        <ImageWrapper
          src={bgImg}
          alt="Mask Hr Blog"
          width={1440}
          height={470}
          style="w-full  bg-cover bg-top bg-no-repeat"
        />

        {/* Text content */}
        <div className="flex flex-col gap-4 p-[20px] md:gap-8 md:p-[30px]">
          <MainText
            text={title}
            size={'text-[22px]'}
            textLeft={true}
            bold={true}
          />
          <p className="text-center text-[14px] leading-[14px] text-mainBlack md:text-start md:text-[16px] md:leading-[16px]">
            {`Jan 17,  ${new Date().getFullYear()} `}
          </p>
          <MainText text={subtitle} color="text-secondary" textLeft={true} />

          {/* button */}
          <div className="flex justify-center md:justify-start">
            <Link href={btnLink}>
              <button
                type="button"
                className={`font-lato flex cursor-pointer items-center justify-center gap-2 px-[10px] text-start text-[16px] font-normal leading-[16px] text-primary md:justify-start md:text-[20px] md:leading-[20px]`}
              >
                {btnText}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
