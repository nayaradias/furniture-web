import styled from "styled-components";
import colors from "styles/colors";
import { SnackBarProps } from "./SnackBar.types";

export const Container = styled.div<SnackBarProps>`
   display: flex;
   justify-content: space-between;
   align-items: center;
   flex-direction: row;
   border-radius: 8px;
   background-color: ${colors.black};
   padding: ${p => p.text ? 9.5 : 20}px 16px;
`;

export const ContentLeft = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: row;
`;

export const ContentText = styled.div``;

export const ContentAction = styled.div`
  cursor: pointer;
`;

export const ContentRight = styled.div``;
