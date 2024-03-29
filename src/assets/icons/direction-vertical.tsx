import React from 'react';
import colors from 'styles/colors';

export default function IconDirectionVertical(props: React.SVGProps<SVGSVGElement>) {
    const { width = 24, height = 24, color = colors.black } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.7071 8.29289L17.7071 4.29289C17.3166 3.90237 16.6834 3.90237 16.2929 4.29289L12.2929 8.29289L13.7071 9.70711L16 7.41421V19H18V7.41421L20.2929 9.70711L21.7071 8.29289Z" fill={color} />
            <path d="M10.2929 14.2929L8.00001 16.5858L8.00001 5L6.00001 5L6.00001 16.5858L3.70712 14.2929L2.29291 15.7071L6.29291 19.7071C6.68343 20.0976 7.3166 20.0976 7.70712 19.7071L11.7071 15.7071L10.2929 14.2929Z" fill={color} />
        </svg>
    )
}