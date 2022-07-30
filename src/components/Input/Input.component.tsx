import React from 'react';
import colors from 'styles/colors';
import { Body2Regular } from 'styles/general';
import { Container} from './Input.style';
import { InputProps } from './Input.types';

const Input: React.FC<InputProps> = (props) => {  
const { variation, value, placeholder = 'Empty', disabled, error , onChange } = props;

return (
    <Container variation={variation} onChange={onChange} error={error}>
      <input  disabled={disabled} placeholder={placeholder} value={value} onChange={onChange} />
      <Body2Regular marginLeft={16} marginTop={8} color={colors.red400}>{error}</Body2Regular>
    </Container>
  )
}

export default Input;