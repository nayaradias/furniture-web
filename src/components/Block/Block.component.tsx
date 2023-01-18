import React from 'react';
import { Container } from './Block.style';
import { BlockProps } from './Block.types';

const Block: React.FC<BlockProps> = (props) => {

  const { width, height } = props;

  return (
    <Container {...props} />
  )
}

export default Block;