import { FaArrowRightLong } from "react-icons/fa6";

export const MainButton = ({ text, bgcolor, hasIcon }) => {
  return (
    <button
      className={`cursor-pointer font-normal rounded-[24px]   font-lato ${
        bgcolor ? bgcolor : "bg-mainBlack"
      } flex text-white  px-[20px] py-[15px] gap-2 text-[12px] md:text-[14px] leading-[10px] lg:text-[16px] lg:leading-[16px] items-center justify-center  shadow-custom-secondary hover:scale-105 active:scale-75 transition-all duration-500 text-nowrap`}
    >
      {text}
      {hasIcon === true && <FaArrowRightLong size={15} />}
    </button>
  );
};
