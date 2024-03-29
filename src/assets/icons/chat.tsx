import React from 'react';
import colors from 'styles/colors';

export default function IconChat(props: React.SVGProps<SVGSVGElement>) {
    const { width = 24, height = 24, color = colors.black } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M3 6C3 4.34314 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V16.3158C21 17.9726 19.6569 19.3158 18 19.3158H12.3351L9.04696 21.7981C8.74421 22.0267 8.3382 22.0642 7.99864 21.8951C7.65908 21.726 7.44444 21.3793 7.44444 21V19.3158H6C4.34315 19.3158 3 17.9726 3 16.3158V6ZM6 5C5.44771 5 5 5.44772 5 6V16.3158C5 16.8681 5.44772 17.3158 6 17.3158H8.44444C8.99673 17.3158 9.44444 17.7635 9.44444 18.3158V18.9921L11.3975 17.5177C11.571 17.3867 11.7826 17.3158 12 17.3158H18C18.5523 17.3158 19 16.8681 19 16.3158V6C19 5.44772 18.5523 5 18 5H6Z" fill={color} />
        </svg>
    )
}
