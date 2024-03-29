import React from "react";
import colors from "styles/colors";

export default function IconArrowLeftDown(props: React.SVGProps<SVGSVGElement>) {
    const { width = 24, height= 24, color= colors.black} = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M7.63604 17.364H15.8284V19.364L5.22182 19.364C4.66954 19.364 4.22182 18.9163 4.22182 18.364L4.22183 7.7574L6.22182 7.7574V15.9498L17.9497 4.22186L19.364 5.63608L7.63604 17.364Z" fill={color} />
        </svg>
    )
}