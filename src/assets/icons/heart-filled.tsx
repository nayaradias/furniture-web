import React from 'react';
import colors from 'styles/colors';

export default function IconHeartFilled(props: React.SVGProps<SVGSVGElement>) {
    const { width = 24, height = 24, color = colors.black } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.9895 4.83409C9.86992 2.55783 6.26064 2.37763 3.91179 4.42078C1.54324 6.48107 1.34628 10.0264 3.48417 12.3223L11.2682 20.6815C11.4573 20.8846 11.7224 21 12 21C12.2776 21 12.5427 20.8846 12.7318 20.6815L20.5158 12.3223C22.6537 10.0264 22.4568 6.48107 20.0882 4.42078C17.7394 2.37763 14.1301 2.55783 12.0105 4.83409L12 4.84531L11.9895 4.83409Z" fill={color} />
        </svg>
    )
}