import React, { useState } from 'react';
import GlobalStyle from './styles/global';

import Input from 'components/Input';

const App: React.FC = () => {
  const [value, setValue] = useState('')
  return(
  <>
   <GlobalStyle />
   <div style={{padding: 100}}>
    <Input variation="default" value={value} onChange={(v)=>setValue(v.currentTarget.value)}/>
    <Input disabled variation="default" value={value} onChange={(v)=>setValue(v.currentTarget.value)}/>
   </div>
  </>
)};

export default App;
