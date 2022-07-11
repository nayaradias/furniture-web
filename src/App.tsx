import ButtonCounter from 'components/ButtonCounter';
import React, { useState } from 'react';


const App: React.FC = () => {

  return(
  <>
    <ButtonCounter min={0} max={5}/>
  </>
)};

export default App;
