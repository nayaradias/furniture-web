import React from 'react';
import colors from 'styles/colors';

export default function IconChevronRight(props: React.SVGProps<SVGSVGElement>) {
    const { width = 24, height = 24, color = colors.black } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M14.5858 12L7.79289 18.7929L9.20711 20.2071L16.7071 12.7071C17.0976 12.3166 17.0976 11.6834 16.7071 11.2929L9.20711 3.79291L7.79289 5.20712L14.5858 12Z" fill={color} />
        </svg>
    )
}
