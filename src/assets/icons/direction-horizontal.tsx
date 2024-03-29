
import React from 'react';
import colors from 'styles/colors';

export default function IconDirectionHorizontal(props: React.SVGProps<SVGSVGElement>) {
    const { width = 24, height = 24, color = colors.black } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.29289 2.29291L4.29289 6.29291C3.90237 6.68343 3.90237 7.3166 4.29289 7.70712L8.29289 11.7071L9.70711 10.2929L7.41421 8.00001H19V6.00001H7.41421L9.70711 3.70712L8.29289 2.29291Z" fill={color} />
            <path d="M14.2929 13.7071L16.5858 16H5V18H16.5858L14.2929 20.2929L15.7071 21.7071L19.7071 17.7071C20.0976 17.3166 20.0976 16.6834 19.7071 16.2929L15.7071 12.2929L14.2929 13.7071Z" fill={color} />
        </svg>
    )
}