import React from "react";
import ImageWrapper from "../Wrappers/ImageWrapper";

const MainBadge = ({ text, icon, bgColor, textColor }) => {
  return (
    <div
      className={`flex gap-4  px-[20px] py-[10px] ${bgColor ? bgColor : "border border-secondary bg-transparent"} ${textColor ? textColor : "text-mainBlack"} rounded-[25px]`}
    >
      <ImageWrapper
        src={icon}
        alt={`MaskHr Badge ${text}`}
        width={20}
        height={20}
        style={"bg-contain bg-no-repeat bg-center"}
      />
      {text}
    </div>
  );
};

export default MainBadge;
