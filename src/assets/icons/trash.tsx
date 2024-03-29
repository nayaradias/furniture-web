import React from 'react';
import colors from 'styles/colors';

export default function IconTrash(props: React.SVGProps<SVGSVGElement>){
    const { width = 24, height = 24, color = colors.black } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path fillRule="evenodd" clipRule="evenodd" d="M8.0513 2.68377C8.18741 2.27543 8.56955 2 8.99998 2H15C15.4304 2 15.8126 2.27543 15.9487 2.68377L16.7207 5H20V7H4V5H7.27922L8.0513 2.68377ZM14.2792 4L14.6126 5H9.38741L9.72074 4H14.2792Z" fill={color}/>
         <path d="M5 9V21C5 21.5523 5.44772 22 6 22H18C18.5523 22 19 21.5523 19 21V9H17V20H7V9H5Z" fill={color}/>
         <path d="M9 18V9H11V18H9Z" fill={color}/>
         <path d="M13 9V18H15V9H13Z" fill={color}/>
        </svg>
    )
}