import { IconBell, IconLoader } from 'assets';
import PhotoIcon from 'assets/icons/photo';
import Avatar from 'components/Avatar';
import Block from 'components/Block';
import Button from 'components/Button';
import React from 'react';
import colors from 'styles/colors';
import { Body1Regular, Body2Regular } from 'styles/general';
import { Container, ContentAction, ContentLeft, ContentRight, ContentText } from './SnackBar.style';
import { SnackBarProps } from './SnackBar.types';

const SnackBar: React.FC<SnackBarProps> = (props) => {

  const { loading, imageUrl, title, text, rightIcon, rightText, rightButton, rightOnClick, } = props;

  return (
    <Container text={text}>
      <ContentLeft>
        {loading && (<>
          <IconLoader color={colors.white} />
          <Block width={16} height={2} />
        </>
        )}
        {imageUrl && (<>
          <Avatar size={36} imageUrl={imageUrl} />
          <Block width={16} height={2} />
        </>
        )}
        <ContentText>
          <Body1Regular color={colors.white}>{title}</Body1Regular>
          <Body2Regular color={colors.gray500}>{text}</Body2Regular>
        </ContentText>
      </ContentLeft>
      <ContentRight>

        {
          rightText && (
            <ContentAction onClick={rightOnClick}>
              <Body1Regular color={colors.yellow400}>{rightText}</Body1Regular>
            </ContentAction>
          )
        }
        {
          rightIcon && <IconBell color={colors.white} />
        }
        {
          rightButton && (
            <Button onClick={() => rightOnClick && rightOnClick()} small title={rightButton || 'Button'} variation="primary" iconPosition="none" />
          )
        }
      </ContentRight>
    </Container>
  )
}

export default SnackBar;