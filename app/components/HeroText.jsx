import PrettyButton from "./PrettyButton";

export default function HeroText() {
  return (
    <div className="text-center animate-fade-up animate-ease-out py-20 md:py-32 lg:py-40 ">
      <h1 className="text-5xl font-extrabold text-white text-nowrap lg:text-8xl md:text-9xl">
        Abu Hurairah Club
      </h1>
      <p className="text-white font-bold tracking-widest text-4xl my-9 drop-shadow-lg">
        | WE SAVE, WE CARE |
      </p>
      <PrettyButton
        text="Register Now"
        link="https://www.google.com"
        className="mt-12"
      ></PrettyButton>
    </div>
  );
}