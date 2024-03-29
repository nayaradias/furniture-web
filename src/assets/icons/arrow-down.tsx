import React from "react";
import colors from "styles/colors";

export default function IconArrowDown(props: React.SVGProps<SVGSVGElement>) {
    const { width = 24, height = 24, color = colors.black } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M13 18.5858L18.7929 12.7929L20.2071 14.2071L12.7071 21.7071C12.3166 22.0976 11.6834 22.0976 11.2929 21.7071L3.79289 14.2071L5.20711 12.7929L11 18.5858V2H13V18.5858Z" fill={color} />
        </svg>
    )
}