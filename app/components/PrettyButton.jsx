import React from "react";

export default function PrettyButton({ text, link = "/" }) {
  return (
    <a href={link}>
      <button className="p-3 px-6 bg-[#D4B75D] rounded-3xl text-white font-bold  hover:bg-[#B99771]">
        {text}
      </button>
    </a>
  );
}
