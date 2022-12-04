import styled from "styled-components";
import colors from "../../styles/colors";
import { ChipsProps } from "./Chips.types";

export const BackgroundColor: Record<ChipsProps['type'], string> = {
   dark: colors.black,
   gray: colors.gray100,
   white: colors.white,
};

export const Container = styled.div<Pick<ChipsProps, 'type' | 'hidden'>>`
   display: ${props => props.hidden ? 'none' : 'flex'};
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   background-color: ${(props) => BackgroundColor[props.type]};
   padding: 9px 16px;
   border-radius: 8px;
   width: auto;
   border: 1px solid ${props => props.type === 'white' ? colors.gray300 : colors.transparent};

   div{
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid ${props => props.type === 'dark' ? colors.white : colors.transparent};
      border-radius: 100px;
   
      img{
         width: 18px;
         height: 18px;
         border-radius: 100px;
      }
   }
   button{
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      background-color: ${colors.transparent};
      cursor: pointer;
   }
`;
