import React from "react";
import MainText from "../typography/MainText";

const ConceptCard = ({ index, title, subtitle }) => {
  return (
    <div className="group flex flex-col gap-4  p-4 md:p-8 items-center justify-between h-full border-b-2 border-secondary hover:border-primary transition-colors duration-300">
      <h1
        className="flex justify-center items-center text-[16px] rounded-full w-[40px] h-[40px] bg-secondary text-mainBlack/40
      group-hover:bg-primary group-hover:text-white transition-colors duration-300"
      >
        {index}
      </h1>
      <MainText
        text={title}
        color={"text-secondary group-hover:text-mainBlack"}
        bold={true}
        size={"text-[18px]"}
      />
      <MainText
        text={subtitle}
        color={"text-secondary group-hover:text-mainBlack"}
      />
    </div>
  );
};

export default ConceptCard;
