
import React from 'react';
import colors from 'styles/colors';

export default function IconChevronLeft(props: React.SVGProps<SVGSVGElement>) {
    const { width = 24, height = 24, color = colors.black } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M9.41421 12L16.2071 5.20712L14.7929 3.79291L7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071L14.7929 20.2071L16.2071 18.7929L9.41421 12Z" fill={color} />
        </svg>
    )
}
