import React from "react";

export default function PrettyButton({ text, link = "/" }) {
  return (
    <a href={link}>
      <button className="p-3 px-6 bg-[#FD775D] rounded-3xl text-white font-bold border-2 border-black hover:bg-red-600/80">
        {text}
      </button>
    </a>
  );
}
