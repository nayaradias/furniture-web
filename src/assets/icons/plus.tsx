import React from 'react';
import colors from '../../styles/colors';

const PlusIcon = (props: React.SVGProps<SVGSVGElement>) => {
    const { width = 20, height = 20, color = colors.black } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M9.16667 9.16667V2.5H10.8333V9.16667H17.5V10.8333H10.8333V17.5H9.16667V10.8333H2.5V9.16667H9.16667Z" fill={color} />
        </svg>
    )
}
export default PlusIcon;