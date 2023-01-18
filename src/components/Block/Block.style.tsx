import styled from "styled-components";
import { BlockProps } from "./Block.types";

export const Container = styled.div<BlockProps>`
   width: ${props => props.width || 56}px;
   height: ${props => props.height || 56}px;
`;