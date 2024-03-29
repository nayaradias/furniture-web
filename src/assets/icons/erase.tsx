import React from 'react';
import colors from 'styles/colors';

export default function IconErase(props: React.SVGProps<SVGSVGElement>) {
    const { width = 24, height = 24, color = colors.black } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none">
            <path d="M9.79289 9.20711L12.5858 12L9.79289 14.7929L11.2071 16.2071L14 13.4142L16.7929 16.2071L18.2071 14.7929L15.4142 12L18.2071 9.20711L16.7929 7.79289L14 10.5858L11.2071 7.79289L9.79289 9.20711Z" fill={color} />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 3C8.73478 3 8.48043 3.10536 8.29289 3.29289L0.292893 11.2929C-0.0976311 11.6834 -0.0976311 12.3166 0.292893 12.7071L8.29289 20.7071C8.48043 20.8946 8.73478 21 9 21H18C20.2091 21 22 19.2091 22 17V7C22 4.79086 20.2091 3 18 3H9ZM2.41421 12L9.41421 5H18C19.1046 5 20 5.89543 20 7V17C20 18.1046 19.1046 19 18 19H9.41421L2.41421 12Z" fill={color} />
        </svg>
    )
}