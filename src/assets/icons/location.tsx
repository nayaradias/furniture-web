import React from 'react';
import colors from 'styles/colors';

export default function IconLocation(props: React.SVGProps<SVGSVGElement>) {
    const { width = 24, height = 24, color = colors.black } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M20.7071 3.29289C20.986 3.57183 21.0749 3.98868 20.9341 4.35714L14.4341 21.3571C14.2729 21.7787 13.8492 22.0401 13.4001 21.995C12.951 21.9499 12.5878 21.6096 12.5136 21.1644L11.131 12.869L2.8356 11.4864C2.39039 11.4122 2.05007 11.049 2.005 10.5999C1.95993 10.1508 2.22128 9.72714 2.64287 9.56595L19.6429 3.06595C20.0113 2.92507 20.4282 3.01396 20.7071 3.29289ZM6.79659 10.119L12.1644 11.0136C12.5859 11.0838 12.9162 11.4141 12.9864 11.8356L13.881 17.2034L18.2666 5.73336L6.79659 10.119Z" fill={color} />
        </svg>
    )
}