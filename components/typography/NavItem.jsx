export default function NavItem({ text, textColor }) {
  return (
    <nav
      className={`${textColor ? textColor : "text-mainBlack/50"} group text-[12px] lg:text-[16px]  font-Gilroy font-normal font-lato  cursor-pointer tracking-tight`}
    >
      {text}
    </nav>
  );
}
