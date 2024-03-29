import React from 'react';
import colors from 'styles/colors';

export default function IconChevronUp(props: React.SVGProps<SVGSVGElement>) {
    const { width = 24, height = 24, color = colors.black } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 7C12.2652 7 12.5196 7.10536 12.7071 7.29289L20.2071 14.7929L18.7929 16.2071L12 9.41421L5.20711 16.2071L3.79289 14.7929L11.2929 7.29289C11.4804 7.10536 11.7348 7 12 7Z" fill={color} />
        </svg>
    )
}
