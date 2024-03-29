
import React from 'react';
import colors from 'styles/colors';

export default function IconReload(props: React.SVGProps<SVGSVGElement>) {
    const { width = 24, height = 24, color = colors.black } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M5 12.0198C5 8.15378 8.13401 5.01978 12 5.01978C14.3777 5.01978 16.48 6.20542 17.7456 8.01978H14V10.0198H20C20.5523 10.0198 21 9.57206 21 9.01978V3.01978H19V6.36276C17.3506 4.32425 14.8283 3.01978 12 3.01978C7.02944 3.01978 3 7.04921 3 12.0198C3 16.9903 7.02944 21.0198 12 21.0198C16.9706 21.0198 21 16.9903 21 12.0198H19C19 15.8858 15.866 19.0198 12 19.0198C8.13401 19.0198 5 15.8858 5 12.0198Z" fill={color}/>
        </svg>
    )
}