import { IconCheckmark } from 'assets/icons';
import React, { useState } from 'react';
import { Container} from './CheckRadio.style';
import { CheckRadioProps } from './CheckRadio.types';

const CheckRadio: React.FC<CheckRadioProps> = (props) => {  
const { disabled } = props;
const [checked, setChecked] = useState(false);

const onClick = () => setChecked(!checked);

return (
    <Container onClick={onClick} checked={checked} disabled={disabled}>
     { checked && <IconCheckmark width={16} height={16} />}
    </Container>
  )
}

export default CheckRadio;