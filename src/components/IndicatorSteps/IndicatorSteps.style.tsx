import styled from "styled-components";
import colors from "../../styles/colors";
import { IndicatorStepsProps } from "./IndicatorSteps.types";

export const Container = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;
`;

export const Content = styled.div<Pick<IndicatorStepsProps,'active'>>`
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: ${props => props.active ? colors.black : colors.gray400};//
   width: ${props => props.active ? 11 : 5}px;
   height: 5px;
   margin: 0 5px;
   border-radius: 100px;
   transition: width 500ms ease-in-out;
`;

