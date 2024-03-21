import LogoImage from "./LogoImage";

export default function Header() {
	return (
		<header className="sticky left-0 top-0 w-full bg-sky-500 p-5 px-10 flex font-bold text-white z-10">
			<LogoImage></LogoImage>
			<div className="flex w-full justify-center gap-4 lg:gap-6 items-center">
				<a href="/" className="transition ease-in-out hover:text-white/80">
					Home
				</a>
				<a href="/about" className="transition ease-in-out hover:text-white/80">
					About
				</a>
				<a href="/news" className="transition ease-in-out hover:text-white/80">
					News
				</a>
				<div>
					{/* COMING SOON FEATURE */}
					<span
						className="absolute text-white bg-red-400 p-1 px-2 rounded-3xl leading-none"
						style={{ fontSize: "10px", top: "8px" }}
					>
						Coming<br></br> soon
					</span>
					{/* <a href="/projects" className="hover:text-white/80"> */}
					Projects
					{/* </a> */}
				</div>
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
