import React from 'react';
import { Container, Content } from './IndicatorSteps.style';
import { IndicatorStepsProps } from './IndicatorSteps.types';

const IndicatorSteps: React.FC<IndicatorStepsProps> = (props) => {

  const { current, steps } = props;

  return (
    <Container>
      {
        Array.from(Array(steps).keys()).map(i => (
          <Content key={i} active={current === i}/>
        ))
      }
    </Container>
  )
}

export default IndicatorSteps;