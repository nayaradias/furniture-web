import React from 'react';
import ButtonCounter from 'components/ButtonCounter';
import GlobalStyle from './styles/global';
import { TextBodyMidium } from 'styles/general';

const App: React.FC = () => {

  return(
  <>
   <GlobalStyle />
    <ButtonCounter min={0} max={5}/>
    <TextBodyMidium>Almost before</TextBodyMidium>
  </>
)};

export default App;
