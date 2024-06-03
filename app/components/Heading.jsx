export default function Heading({ text, lightFont }) {
  const isLightFont = lightFont ? "text-white" : "text-red-800";
  return <h2 className={"text-3xl text-red-800 font-bold " + isLightFont}>{text}</h2>;
}
