import React from 'react';
import colors from 'styles/colors';

export default function IconStarFilled(props: React.SVGProps<SVGSVGElement>) {
    const { width = 24, height = 24, color = colors.black } = props;
    return (
        <svg width={width} height={height}  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M12.8944 2.55279C12.725 2.214 12.3788 2 12 2C11.6212 2 11.275 2.214 11.1056 2.55279L8.33684 8.09026L2.34794 9.01163C1.96612 9.07037 1.65228 9.34379 1.54178 9.71397C1.43128 10.0841 1.54389 10.4849 1.83104 10.7433L6.39314 14.8492L5.02561 20.7751C4.93591 21.1638 5.08581 21.5687 5.40702 21.8052C5.72823 22.0418 6.1593 22.0648 6.50387 21.8638L12 18.6577L17.4961 21.8638C17.8407 22.0648 18.2718 22.0418 18.593 21.8052C18.9142 21.5687 19.0641 21.1638 18.9744 20.7751L17.6069 14.8492L22.169 10.7433C22.4561 10.4849 22.5687 10.0841 22.4582 9.71397C22.3477 9.34379 22.0339 9.07037 21.6521 9.01163L15.6632 8.09026L12.8944 2.55279Z" fill={color}/>
        </svg>
    )
}