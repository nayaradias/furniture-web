import React from 'react';
import colors from 'styles/colors';

export default function IconBag(props: React.SVGProps<SVGSVGElement>){
    const { width = 24, height = 24, color = colors.black } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C9.79086 2 8 3.79086 8 6V7H7C5.34315 7 4 8.34315 4 10V19C4 20.6569 5.34315 22 7 22H17C18.6569 22 20 20.6569 20 19V10C20 8.34315 18.6569 7 17 7H16V6C16 3.79086 14.2091 2 12 2ZM14 9V11H16V9H17C17.5523 9 18 9.44772 18 10V19C18 19.5523 17.5523 20 17 20H7C6.44772 20 6 19.5523 6 19V10C6 9.44772 6.44772 9 7 9H8V11H10V9H14ZM14 7V6C14 4.89543 13.1046 4 12 4C10.8954 4 10 4.89543 10 6V7H14Z" fill={color} />
        </svg>
    )
}
