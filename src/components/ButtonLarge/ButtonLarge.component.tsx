import React from 'react';
import { Container } from './ButtonLarge.style';
import { ButtonLargeProps } from './ButtonLarge.types';

const ButtonLarge: React.FC<ButtonLargeProps> = (props) => {
  const { title, iconPosition, variation, icon } = props;
  // 'none' | 'left' | 'right' | 'centerleft' | 'centerRight'
  // const contentNone = ();
  // const contentLeft = ();
  // const contentRight = ();
  // const contentCenterleft = ();
  // const contentCenterRight = ();

  return (
    <Container
      title={title}
      variation={variation}
      iconPosition={iconPosition}>
      {title} 
    </Container>
  )
}

export default ButtonLarge;