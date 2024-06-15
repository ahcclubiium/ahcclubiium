export default function HeadingAboutus({ text, lightFont }) {
  const isLightFont = lightFont ? "text-white" : "text-black";
  return (
    <h2
      className={
        "text-5xl text-[#8B2813] font-extrabold text-center" + isLightFont
      }
    >
      {text}
    </h2>
  );
}
