import { GeneralStylesProps } from "shared/styles";

export type VariationType =  'primary' | 'secundary'| 'outline' |'ghost';
export type IconPositionType =  'none' | 'left' | 'right' | 'centerleft' | 'centerRight';

export interface ButtonLargeProps  extends GeneralStylesProps{
    title: string,
    variation: VariationType,
    icon?: React.ReactNode;
    iconPosition: IconPositionType, 
    disabled?: boolean,
}
