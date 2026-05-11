export default function PageBorders({ children, background, padding }) {
  return (
    <section
      className={`${
        background
          ? `${background} darks:bg-[#212124]`
          : 'darks:bg-[#212124] bg-white'
      } ${padding === null ? '' : 'px-[4vw] py-[10vh]'} overflow-hidden`}
    >
      {children}
    </section>
  );
}
