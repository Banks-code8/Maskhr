import NormalText from "../typography/NormalText";
import { HeaderOne } from "../typography/HeaderOne";
import MainText from "../typography/MainText";

export default function TextLeftPageStarter({
  Title,
  SubtitleText,
  hasBackground,
}) {
  return (
    <div
      className={`${
        hasBackground
          ? "bg-[#F2F2F2] darks:bg-[#212124] "
          : "bg-none darks:bg-[#212124]  "
      }  flex flex-col justify-center items-start gap-1 md:gap-2 my-[20px] `}
    >
      <HeaderOne
        text={Title}
        color={"text-primary darks:text-white"}
        size={
          "text-[24px] leading-[24px]  md:text-[18px] md:leading-[18px] lg:text-[24px] lg:leading-[24px]"
        }
      />
      <MainText text={SubtitleText} color={"darks:text-mainBlack/50 "} />
    </div>
  );
}
