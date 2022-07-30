import React from 'react';
import colors from 'styles/colors';

export default function IconBurger(props: React.SVGProps<SVGSVGElement>) {
    const { width = 24, height = 24, color = colors.black } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 7H3V5H21V7Z" fill={color} />
            <path d="M21 13H3V11H21V13Z" fill={color} />
            <path d="M3 19H21V17H3V19Z" fill={color} />
        </svg>
    )
}
