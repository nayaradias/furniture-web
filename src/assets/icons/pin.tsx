import React from 'react';
import colors from 'styles/colors';

export default function IconPin(props: React.SVGProps<SVGSVGElement>) {
    const { width = 24, height = 24, color = colors.black } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15ZM14 11C14 12.1046 13.1046 13 12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11Z" fill={color} />
            <path fillRule="evenodd" clipRule="evenodd" d="M21 11C21 15.9706 15 22.5 12 22.5C9 22.5 3 15.9706 3 11C3 6.02944 7.02944 2 12 2C16.9706 2 21 6.02944 21 11ZM19 11C19 12.7989 17.8427 15.2252 16.0875 17.3348C15.2412 18.352 14.3373 19.1944 13.5241 19.7642C12.6419 20.3825 12.1245 20.5 12 20.5C11.8755 20.5 11.3581 20.3825 10.4759 19.7642C9.66268 19.1944 8.75876 18.352 7.91247 17.3348C6.15732 15.2252 5 12.7989 5 11C5 7.13401 8.13401 4 12 4C15.866 4 19 7.13401 19 11Z" fill={color} />
        </svg>
    )
}