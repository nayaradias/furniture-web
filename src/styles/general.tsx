import styled from 'styled-components';
import colors from './colors';

const baseHeading = styled.p<{color:string,fontWeight:number}>`
  font-weight: ${(props) => props.fontWeight || 700};
  font-size: 48px;
  line-height: 72px;
  color: ${(props) => props.color || colors.black};
`;

export const Heading0Bold = styled(baseHeading)`
    font-weight: 600;
`;

export const Heading0Regular = styled(baseHeading)`
    font-weight: 400;
`;

export const Heading0Light = styled(baseHeading)`
    font-weight: 400;
`;
