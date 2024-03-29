import React from "react";
import colors from "styles/colors";

export default function IconArrowLeft(props: React.SVGProps<SVGSVGElement>) {
    const { width = 24, height = 24, color = colors.black } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M5.41421 13L11.2071 18.7929L9.79289 20.2071L2.29289 12.7071C1.90237 12.3166 1.90237 11.6834 2.29289 11.2929L9.79289 3.79291L11.2071 5.20712L5.41421 11H22V13H5.41421Z" fill={color} />
        </svg>
    )
}