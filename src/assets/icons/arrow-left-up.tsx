import React from "react";
import colors from "styles/colors";

export default function IconArrowLeftUp(props: React.SVGProps<SVGSVGElement>) {
    const { width = 24, height = 24, color = colors.black } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M6.22182 7.63605V15.8284H4.22183L4.22182 5.22183C4.22182 4.66955 4.66954 4.22183 5.22182 4.22183L15.8284 4.22183L15.8284 6.22183H7.63604L19.364 17.9498L17.9497 19.364L6.22182 7.63605Z" fill={color} />
        </svg>
    )
}