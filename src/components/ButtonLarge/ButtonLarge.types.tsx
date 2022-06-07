import { GeneralStylesProps } from "shared/styles";

export interface ButtonLargeProps  extends GeneralStylesProps{
    title:string,
    variation: 'primary' | 'secundary'| 'outline' |'ghost',
    icon?: Element;
    iconPosition: 'none' | 'left' | 'right' | 'centerleft' | 'centerRight', 
    // outline?: boolean,
}
