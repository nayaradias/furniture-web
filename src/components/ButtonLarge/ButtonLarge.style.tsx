import styled from "styled-components";
import colors from "../../styles/colors";
import { ButtonLargeProps } from "./ButtonLarge.types";

export const BackgroundColor: Record<ButtonLargeProps['variation'], string> = {
    primary: colors.yellow500,
    secundary: colors.gray100,
    outline: colors.white,
    ghost: colors.transparent,
};

export const JustifyContent: Record<ButtonLargeProps['iconPosition'], string> = {
    none: 'center',
    left: 'space-between',
    right: 'space-between',
    centerleft: 'center',
    centerRight: 'center',
};

export const AlignItems: Record<ButtonLargeProps['iconPosition'], string> = {
    none: 'center',
    left: 'space-between',
    right: 'space-between',
    centerleft: 'center',
    centerRight: 'center',
};


export const Container = styled.button<ButtonLargeProps>`
   display: flex;
   justify-content: ${props=> JustifyContent[props.iconPosition] || 'center'};
   align-items: ${props=> AlignItems[props.iconPosition] || 'center'};
   background-color: ${(props) => BackgroundColor[props.variation] || colors.transparent};
   width: ${props=> props.width || 100}%;
   border: ${props=>props.variation === 'outline' ? '2px solid'+ colors.black : 'none'};
   padding: 20px 16px;
   border-radius: 8px;
`;