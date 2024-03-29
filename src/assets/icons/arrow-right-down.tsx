import React from "react";
import colors from "styles/colors";

export default function IconArrowRightDown(props: React.SVGProps<SVGSVGElement>) {
  const { width = 24, height = 24, color = colors.black } = props;
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M17.364 15.9498V7.75737H19.364L19.364 18.364C19.364 18.9163 18.9162 19.364 18.364 19.364L7.75736 19.364L7.75736 17.364H15.9497L4.22182 5.63605L5.63604 4.22183L17.364 15.9498Z" fill={color} />
    </svg>
  )
}