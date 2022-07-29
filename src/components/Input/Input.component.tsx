import React from 'react';
import { Container} from './Input.style';
import { InputProps } from './Input.types';

const Input: React.FC<InputProps> = (props) => {
  
const { variation, value, placeholder = 'Empty', disabled ,onChange } = props;


return (
    <Container variation={variation} onChange={onChange}>
      <input disabled={disabled} placeholder={placeholder} value={value} onChange={onChange} />
    </Container>
  )
}

export default Input;