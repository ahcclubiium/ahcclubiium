import LogoImage from "./LogoImage";

export default function Header() {
  return (
    <header
      className="
		sticky left-0 top-0 w-full 
		bg-[#C77D26] p-5 px-10 flex 
		font-bold text-white z-10"
    >
      <LogoImage></LogoImage>
      <div className="flex w-full justify-center gap-4 lg:gap-6 items-center">
        <a href="/" className="transition ease-in-out hover:text-white/80">
          Home
        </a>
        <a href="/donation" className="transition ease-in-out hover:text-white/80">
          Donation
        </a>
        <a href="/program" className="transition ease-in-out hover:text-white/80">
          Program
        </a>
        <a
          href="https://catwatch.onrender.com/"
          className="transition ease-in-out hover:text-white/80"
        >
          Report
        </a>
        <a
          href="/contact"
          className="transition ease-in-out hover:text-white/80"
        >
          Contact us
        </a>
      </div>
    </header>
  );
}
