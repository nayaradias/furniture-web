import React from "react";
import colors from "styles/colors";

export default function IconArrowRightUp(props: React.SVGProps<SVGSVGElement>) {
    const { width = 24, height = 24, color = colors.black } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M15.9497 6.22183H7.75735V4.22183L18.364 4.22183C18.9162 4.22183 19.364 4.66955 19.364 5.22183L19.364 15.8284L17.364 15.8284V7.63605L5.63603 19.364L4.22182 17.9498L15.9497 6.22183Z" fill={color} />
        </svg>
    )
}