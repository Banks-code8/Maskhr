export default function FooterTitle({ text, color, textLeft }) {
  return (
    <h2
      className={`${
        color ? color : "text-mainBlack"
      }        ${textLeft === true ? "text-center md:text-left" : "text-center"}  font-semibold text-[20px] leading-[20px]  font-lato`}
    >
      {text}
    </h2>
  );
}
