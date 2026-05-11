export default function NormalText({ text, color, size, bold }) {
  return (
    <p
      className={`${
        size
          ? size
          : "text-[14px]  leading-[20px] lg:text-[18px] lg:leading-[24px]"
      } ${color ? color : "text-mainBlack"} ${
        bold === true ? "font-bold" : "font-light"
      } font-lato tracking-tight `}
    >
      {text}
    </p>
  );
}
