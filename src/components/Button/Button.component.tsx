import BagIcon from 'assets/icons/bag';
import React from 'react';
import { Body1Medium } from 'styles/general';
import { Container, Hidden } from './Button.style';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = (props) => {
  
  const { title, iconPosition, variation, icon , disabled, small, onClick } = props;

  const contentIcon =  (icon? icon: <BagIcon />);

  const contentNone = (<Body1Medium>{title}</Body1Medium>);

  const contentRight = (
    <>
      <Hidden />
      <Body1Medium>
        {title}
      </Body1Medium>
     {contentIcon}
    </>
  );

  const contentLeft = (
    <>
      {contentIcon}
      <Body1Medium>
        {title}
      </Body1Medium>
      <Hidden />
    </>
  );

  const contentCenterRight = (
    <>
      <Body1Medium marginRight={8}>
        {title}
      </Body1Medium>
     {contentIcon}
    </>
  );

  const contentCenterleft = (
    <>
      {contentIcon}
      <Body1Medium marginLeft={8}>
        {title}
      </Body1Medium>
    </>
  );

  return (
    <Container
      title={title}
      variation={variation}
      iconPosition={iconPosition}
      disabled={disabled}
      small={small}
      onClick={onClick}
    >
      {iconPosition === 'none' && contentNone}
      {iconPosition === 'left' && contentLeft}
      {iconPosition === 'right' && contentRight}
      {iconPosition === 'centerRight' && contentCenterRight}
      {iconPosition === "centerleft" && contentCenterleft}
    </Container>
  )
}

export default Button;