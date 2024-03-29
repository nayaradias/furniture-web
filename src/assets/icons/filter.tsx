import React from 'react';
import colors from 'styles/colors';

export default function IconFilter(props: React.SVGProps<SVGSVGElement>) {
    const { width = 24, height = 24, color = colors.black } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M7 11C8.86384 11 10.4299 9.72523 10.874 8H21V6H10.874C10.4299 4.27477 8.86384 3 7 3C4.79086 3 3 4.79086 3 7C3 9.20914 4.79086 11 7 11ZM7 9C8.10457 9 9 8.10457 9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9Z" fill={color} />
            <path fillRule="evenodd" clipRule="evenodd" d="M13.126 16C13.5701 14.2748 15.1362 13 17 13C19.2091 13 21 14.7909 21 17C21 19.2091 19.2091 21 17 21C15.1362 21 13.5701 19.7252 13.126 18H3V16H13.126ZM19 17C19 18.1046 18.1046 19 17 19C15.8954 19 15 18.1046 15 17C15 15.8954 15.8954 15 17 15C18.1046 15 19 15.8954 19 17Z" fill={color} />
        </svg>
    )
}