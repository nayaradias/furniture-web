import styled from "styled-components";
import colors from "styles/colors";
import { CheckRadioProps } from "./CheckRadio.types";

export const Container = styled.button<CheckRadioProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border: none;
  border-radius: 100px;
  background-color: ${props=>props.checked? colors.yellow400:colors.gray100};
  opacity: 1;

  cursor: pointer;

  :disabled{
      opacity: 0.5;
      cursor: not-allowed;
      background-color: ${colors.gray200};
  }
`;
