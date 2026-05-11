import React from "react";

export const HeaderOne = ({ text, color, size, textLeft }) => {
  return (
    <h1
      className={` ${color ? color : "text-mainBlack"} ${
        size ? size : "text-[28px] md:text-[40px] leading-[40px]"
      }  ${textLeft === true ? "text-center md:text-left" : "text-center"} font-bold font-lato`}
    >
      {text}
    </h1>
  );
};
