import React from 'react';
import colors from 'styles/colors';

export default function IconBell(props: React.SVGProps<SVGSVGElement>) {
    const { width = 24, height = 24, color = colors.black } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M4.99997 9C4.99997 5.13401 8.13398 2 12 2C15.866 2 19 5.13401 19 9V10.3115C19 10.7523 19.1751 11.1751 19.4868 11.4869L20.2431 12.2431C20.716 12.716 20.9212 13.3939 20.7901 14.0496L20.3215 16.3922C20.1346 17.3271 19.3137 18 18.3604 18H16C16 20.2091 14.2091 22 12 22C9.79086 22 8 20.2091 8 18H5.63958C4.68622 18 3.86539 17.3271 3.67842 16.3922L3.20989 14.0496C3.07875 13.3939 3.28399 12.716 3.75684 12.2431L4.5131 11.4869C4.82484 11.1751 4.99997 10.7523 4.99997 10.3115V9ZM6.99997 10.3115V9C6.99997 6.23858 9.23855 4 12 4C14.7614 4 17 6.23858 17 9V10.3115C17 11.2828 17.3858 12.2143 18.0726 12.9011L18.8289 13.6573L18.3604 16L5.63958 16L5.17105 13.6573L5.92732 12.9011C6.61413 12.2143 6.99997 11.2828 6.99997 10.3115ZM10 18C10 19.1046 10.8954 20 12 20C13.1046 20 14 19.1046 14 18H10Z" fill={color} />
        </svg>
    )
}
