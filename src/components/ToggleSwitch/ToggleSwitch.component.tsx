import React from 'react';
import { Container ,Content} from './ToggleSwitch.style';
import { ToggleSwitchProps } from './ToggleSwitch.types';

const ToggleSwitch: React.FC<ToggleSwitchProps> = (props) => {
  
  const { isActive, disabled, onPress } = props;
  
  return (
    <Container isActive={isActive} disabled={disabled} onClick={onPress}>
      <Content isActive={isActive} disabled={disabled}/>
    </Container>
  )
}

export default ToggleSwitch;