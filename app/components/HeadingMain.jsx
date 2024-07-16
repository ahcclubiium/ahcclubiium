export default function HeadingMain({ text, lightFont }) {
  const isLightFont = lightFont ? "text-white" : "text-black";
  return (
    <h2
      className={
        "text-5xl text-[#866C5D] font-extrabold text-center" + isLightFont
      }
    >
      {text}
    </h2>
  );
}
