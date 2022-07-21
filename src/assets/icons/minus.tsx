import React from 'react';
import colors from '../../styles/colors';

const MinusIcon = (props: React.SVGProps<SVGSVGElement>) => {
    const { width = 20, height = 20, color = colors.black } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M17.5 10.8334H2.5V9.16669H17.5V10.8334Z" fill={color} />
        </svg>
    )
}
export default MinusIcon;