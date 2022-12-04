import { IconClose } from 'assets';
import React from 'react';
import colors from 'styles/colors';
import { Body2Medium } from 'styles/general';
import { Container } from './Chips.style';
import { ChipsProps } from './Chips.types';

const Chips: React.FC<ChipsProps> = (props) => {

  const { title, imageUrl, type,hidden, close } = props;

  const color = type === 'dark'? colors.white: colors.black;
  
  return (
    <Container type={type} hidden={hidden}>
      {
        imageUrl && <div><img src={imageUrl} /></div>
      }
      <Body2Medium color={color}>{title}</Body2Medium>
      {
        close && (
        <button onClick={close}>
          <IconClose color={color} width={16} height={16} />
        </button>)
      }
    </Container>
  )
}

export default Chips;