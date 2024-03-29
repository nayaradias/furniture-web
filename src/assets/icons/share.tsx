
import React from 'react';
import colors from 'styles/colors';

export default function IconShare(props: React.SVGProps<SVGSVGElement>) {
    const { width = 24, height = 24, color = colors.black } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.7071 3.29289C12.3166 2.90237 11.6834 2.90237 11.2929 3.29289L6.29289 8.29289L7.70711 9.70711L11 6.41421V18H13V6.41421L16.2929 9.70711L17.7071 8.29289L12.7071 3.29289Z" fill={color}/>
            <path d="M3 12V21C3 21.5523 3.44772 22 4 22H20C20.5523 22 21 21.5523 21 21V12H19V20H5V12H3Z" fill={color}/>
        </svg>
    )
}