import React from 'react';
import colors from 'styles/colors';

export default function IconClear(props: React.SVGProps<SVGSVGElement>) {
    const { width = 24, height = 24, color = colors.black } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.79291 9.20711L10.5858 12L7.79291 14.7929L9.20712 16.2071L12 13.4142L14.7929 16.2071L16.2071 14.7929L13.4142 12L16.2071 9.20711L14.7929 7.79289L12 10.5858L9.20712 7.79289L7.79291 9.20711Z" fill={color} />
            <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z" fill={color} />
        </svg>
    )
}
