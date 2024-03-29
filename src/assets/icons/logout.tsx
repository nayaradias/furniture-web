import React from 'react';
import colors from 'styles/colors';

export default function IconLogout(props: React.SVGProps<SVGSVGElement>) {
    const { width = 24, height = 24, color = colors.black } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M17.7071 7.29289L21.7071 11.2929C22.0976 11.6834 22.0976 12.3166 21.7071 12.7071L17.7071 16.7071L16.2929 15.2929L18.5858 13H7V11H18.5858L16.2929 8.70711L17.7071 7.29289Z" fill={color} />
            <path fillRule="evenodd" clipRule="evenodd" d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C13.279 20 14.4852 19.7006 15.555 19.169L16.445 20.96C15.1049 21.626 13.5947 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C13.5947 2 15.1049 2.37401 16.445 3.04001L15.555 4.83103C14.4852 4.2994 13.279 4 12 4Z" fill={color} />
        </svg>
    )
}