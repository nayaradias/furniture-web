import { GeneralStylesProps } from 'shared/styles';
import styled from 'styled-components';
import colors from './colors';

const baseText = styled.p<GeneralStylesProps>`
  align-self: ${(props) => props.alignSelf || 'auto'};
  text-align: ${(props) => props.textAlign || 'auto'};
  width: ${(props) => props.width || 'auto'};
  color: ${(props) => props.color || colors.black};
  margin: 
  ${props => props.marginTop || 0}px  
  ${props => props.marginRight || 0}px 
  ${props => props.marginBottom || 0}px 
  ${props => props.marginLeft || 0}px;
`;

export const Heading0SemiBold = styled(baseText) <GeneralStylesProps>`
  font-family: 'Poppins SemiBold';
  font-size: 48px;
`;

export const Heading1SemiBold = styled(baseText) <GeneralStylesProps>`
  font-family: 'Poppins SemiBold';
  font-size: 32px;
`;

export const Heading2SemiBold = styled(baseText) <GeneralStylesProps>`
  font-family: 'Poppins SemiBold';
  font-size: 24px;
`;

export const Body0Medium = styled(baseText) <GeneralStylesProps>`
  font-family: "Poppins Medium";
  font-size: 18px;
`;

export const Body1Medium = styled(baseText) <GeneralStylesProps>`
  font-family: "Poppins Medium";
  font-size: 16px;
`;

export const Body2Medium = styled(baseText) <GeneralStylesProps>`
  font-family: "Poppins Medium";
  font-size: 14px;
`;

export const Body3Medium = styled(baseText) <GeneralStylesProps>`
  font-family: "Poppins Medium";
  font-size: 12px;
`;

export const Heading0Regular = styled(baseText) <GeneralStylesProps>`
  font-family: "Poppins Regular";
  font-size: 48px;
`;

export const Heading1Regular = styled(baseText) <GeneralStylesProps>`
  font-family: "Poppins Regular";
  font-size: 32px;
`;

export const Heading2Regular = styled(baseText) <GeneralStylesProps>`
  font-family: "Poppins Regular";
  font-size: 24px;
`;

export const Body0Regular = styled(baseText) <GeneralStylesProps>`
  font-family: "Poppins Regular";
  font-size: 18px;
`;

export const Body1Regular = styled(baseText) <GeneralStylesProps>`
  font-family: "Poppins Regular";
  font-size: 16px;
`;

export const Body2Regular = styled(baseText) <GeneralStylesProps>`
  font-family: "Poppins Regular";
  font-size: 14px;
`;

export const Body3Regular = styled(baseText) <GeneralStylesProps>`
  font-family: "Poppins Regular";
  font-size: 12px;
`;

export const Heading0Light = styled(baseText) <GeneralStylesProps>`
  font-family: "Poppins Light";
  font-size: 48px;
`;

export const Heading1Light = styled(baseText) <GeneralStylesProps>`
  font-family: "Poppins Light";
  font-size: 32px;
`;

export const Heading2Light = styled(baseText) <GeneralStylesProps>`
  font-family: "Poppins Light";
  font-size: 24px;
`;

export const Body0Light = styled(baseText) <GeneralStylesProps>`
  font-family: "Poppins Light";
  font-size: 18px;
`;

export const Body1Light = styled(baseText) <GeneralStylesProps>`
  font-family: "Poppins Light";
  font-size: 16px;
`;

export const Body2Light = styled(baseText) <GeneralStylesProps>`
  font-family: "Poppins Light";
  font-size: 14px;
`;

export const Body3Light = styled(baseText) <GeneralStylesProps>`
  font-family: "Poppins Light";
  font-size: 12px;
`;