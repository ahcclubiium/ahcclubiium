import PrettyButton from "./PrettyButton";

export default function HeroText() {
  return (
    <div className="text-center animate-fade-up  animate-ease-out">
      <h1 className="text-5xl font-extrabold text-white text-nowrap lg:text-9xl">
        Abu Hurairah Club
      </h1>
      <p className="text-white font-bold tracking-widest my-9">
      | WE SAVE , WE CARE |
      </p>
      <PrettyButton text={"Register Now"} link="https://www.google.com"></PrettyButton>
      
    </div>
  );
}