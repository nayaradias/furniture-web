
import React from 'react';
import colors from 'styles/colors';

export default function IconCaps(props: React.SVGProps<SVGSVGElement>) {
    const { width = 24, height = 24, color = colors.black } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M11.2929 3.29289C11.6834 2.90237 12.3166 2.90237 12.7071 3.29289L19.7071 10.2929C19.9931 10.5789 20.0787 11.009 19.9239 11.3827C19.7691 11.7564 19.4045 12 19 12H17V21C17 21.5523 16.5523 22 16 22H8C7.44772 22 7 21.5523 7 21V12H5C4.59554 12 4.2309 11.7564 4.07612 11.3827C3.92134 11.009 4.0069 10.5789 4.29289 10.2929L11.2929 3.29289ZM7.41421 10H8C8.55229 10 9 10.4477 9 11V20H15V11C15 10.4477 15.4477 10 16 10H16.5858L12 5.41421L7.41421 10Z" fill={color} />
        </svg>
    )
}
