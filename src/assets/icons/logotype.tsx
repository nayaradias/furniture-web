import React from 'react';
import colors from 'styles/colors';

export default function IconLogotype(props: React.SVGProps<SVGSVGElement>) {
    const { width = 24, height = 24, color = colors.black } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 5V19.7842H16.4053V17.5989C15.9111 18.3543 15.2172 18.9478 14.3238 19.3795C13.4494 19.7932 12.48 20 11.4155 20C10.1989 20 9.10591 19.7662 8.13646 19.2986C7.16701 18.813 6.39715 18.0935 5.82688 17.1403C5.27563 16.1871 5 15.027 5 13.6601V5H7.56619V13.3363C7.56619 14.7932 7.95587 15.9173 8.73523 16.7086C9.5146 17.482 10.5791 17.8687 11.9287 17.8687C13.3164 17.8687 14.4094 17.464 15.2077 16.6547C16.0061 15.8453 16.4053 14.6673 16.4053 13.1205V5H19Z" fill={color} />
        </svg>
    )
}