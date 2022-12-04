import styled from "styled-components";
import colors from "../../styles/colors";
import { ToggleSwitchProps } from "./ToggleSwitch.types";

export const Container = styled.button<ToggleSwitchProps>`
   display: flex;
   justify-content: ${props => props.isActive ? 'flex-end' : 'flex-start'};
   align-items: center;
   background-color: ${props => props.isActive ? colors.yellow100 : colors.gray100};
   width: 52px;
   height: 24px;
   border: none;
   border-radius: 12px;
   cursor: pointer;
   transition: all 800ms;
   :disabled{
       background-color: ${props => props.isActive ? colors.yellow100 : colors.gray200};
       cursor: not-allowed;
    }
`;

export const Content = styled.button<ToggleSwitchProps>`
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: ${props => props.isActive ? colors.yellow400 : colors.gray200};
   width: 28px;
   height: 28px;
   border: none;
   border-radius: 100px;
   cursor: pointer;
   box-shadow: 0px 2px 8px ${colors.shadow10};
   transition: all 800ms;
   :disabled{
        background-color: ${props => props.isActive ? colors.yellow200 : colors.gray100};
        cursor: not-allowed;
        box-shadow: 0px 2px 8px ${colors.shadow10};
    }
`;

