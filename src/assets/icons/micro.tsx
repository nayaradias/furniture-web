import React from 'react';
import colors from 'styles/colors';

export default function IconMicro(props: React.SVGProps<SVGSVGElement>) {
    const { width = 24, height = 24, color = colors.black } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M9 5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11V5ZM13 5V11C13 11.5523 12.5523 12 12 12C11.4477 12 11 11.5523 11 11V5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5Z" fill={color} />
            <path d="M6 9V13.5C6 15.7091 7.79086 17.5 10 17.5H11V22H13V17.5H14C16.2091 17.5 18 15.7091 18 13.5V9H16V13.5C16 14.6046 15.1046 15.5 14 15.5H10C8.89543 15.5 8 14.6046 8 13.5V9H6Z" fill={color} />
        </svg>
    )
}