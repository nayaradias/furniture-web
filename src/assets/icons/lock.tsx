
import React from 'react';
import colors from 'styles/colors';

export default function IconLock(props: React.SVGProps<SVGSVGElement>) {
    const { width = 24, height = 24, color = colors.black } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 18V15H11V18H13Z" fill={color} />
            <path fillRule="evenodd" clipRule="evenodd" d="M7 7V11H6C4.34315 11 3 12.3431 3 14V19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19V14C21 12.3431 19.6569 11 18 11H17V7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7ZM15 11V7C15 5.34315 13.6569 4 12 4C10.3431 4 9 5.34315 9 7V11H15ZM6 13H18C18.5523 13 19 13.4477 19 14V19C19 19.5523 18.5523 20 18 20H6C5.44772 20 5 19.5523 5 19V14C5 13.4477 5.44772 13 6 13Z" fill={color} />
        </svg>
    )
}