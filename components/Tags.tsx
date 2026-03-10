import React from "react";

function Tags({ tag }: { tag: string }) {
  return (
    <div className="bg-white rounded-3xl py-3 px-6 w-fit flex items-center gap-2">
      <Star />
      <span className="bg-clip-text text-transparent bg-linear-to-b from-[#ff5f2d] via-[#ff5f2d] to-[#bf35ff] text-sm">
        {tag}
      </span>
    </div>
  );
}

export default Tags;

const Star = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-5 h-5"
    >
      <defs>
        <linearGradient id="starGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ff5f2d" />
          <stop offset="70%" stopColor="#ff5f2d" />
          <stop offset="100%" stopColor="#bf35ff" />
        </linearGradient>
      </defs>
      <polygon
        fill="url(#starGradient)"
        stroke="url(#starGradient)"
        strokeWidth="1.5"
        strokeLinejoin="round"
        points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2"
      />
    </svg>
  );
};
