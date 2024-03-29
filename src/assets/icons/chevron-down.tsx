import React from 'react';
import colors from 'styles/colors';

export default function IconChevronDown(props: React.SVGProps<SVGSVGElement>) {
    const { width = 24, height = 24, color = colors.black } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 14.5858L5.20711 7.79291L3.79289 9.20712L11.2929 16.7071C11.6834 17.0976 12.3166 17.0976 12.7071 16.7071L20.2071 9.20712L18.7929 7.79291L12 14.5858Z" fill={color} />
        </svg>
    )
}
