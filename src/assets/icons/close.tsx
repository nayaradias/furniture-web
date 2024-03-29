import React from 'react';
import colors from 'styles/colors';

export default function IconClose(props: React.SVGProps<SVGSVGElement>) {
    const { width = 24, height = 24, color = colors.black } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M10.5858 12L3.29291 4.70712L4.70712 3.29291L12 10.5858L19.2929 3.29291L20.7071 4.70712L13.4142 12L20.7071 19.2929L19.2929 20.7071L12 13.4142L4.70712 20.7071L3.29291 19.2929L10.5858 12Z" fill={color} />
        </svg>
    )
}
