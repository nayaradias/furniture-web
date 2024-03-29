import React from 'react';
import colors from 'styles/colors';

export default function IconLoader(props: React.SVGProps<SVGSVGElement>) {
    const { width = 24, height = 24, color = colors.black } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12H22C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C14.7972 2 17.3276 3.14978 19.1414 4.99996L17.7132 6.40004C16.2601 4.91777 14.2381 4 12 4Z" fill={color} />
        </svg>
    )
}