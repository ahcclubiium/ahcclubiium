import Image from "next/image";

export default function LogoImage() {
  return (
    <a href="/">
      <Image src="/images/ahciium.jpg" width={50} height={50} className="rounded-full" alt="abu hurairah club iium"></Image>
    </a>
  );
}
