export default function Heading({ text, lightFont }) {
  const isLightFont = lightFont ? "text-white" : "text-black";
  return <h2 className={"text-3xl text-white font-bold text-center" + isLightFont}>{text}</h2>;
}
