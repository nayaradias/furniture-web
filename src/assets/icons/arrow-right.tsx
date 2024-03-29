import React from "react";
import colors from "styles/colors";

export default function IconArrowRight(props: React.SVGProps<SVGSVGElement>) {
    const { width = 24, height = 24, color = colors.black } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M18.5858 11L12.7929 5.20712L14.2071 3.79291L21.7071 11.2929C22.0976 11.6834 22.0976 12.3166 21.7071 12.7071L14.2071 20.2071L12.7929 18.7929L18.5858 13H2V11H18.5858Z" fill={color} />
        </svg>
    )
}