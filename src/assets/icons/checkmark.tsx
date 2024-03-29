import React from 'react';
import colors from 'styles/colors';

export default function IconCheckmark(props: React.SVGProps<SVGSVGElement>) {
    const { width = 24, height = 24, color = colors.black } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M20.2071 7.20712L9.70711 17.7071C9.31658 18.0976 8.68342 18.0976 8.29289 17.7071L3.79289 13.2071L5.20711 11.7929L9 15.5858L18.7929 5.79291L20.2071 7.20712Z" fill={color} />
        </svg>
    )
}
