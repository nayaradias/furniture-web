import InputRange from 'components/InputRange';
import React, { useState } from 'react';


const App: React.FC = () => {
  const [v1, setV1] = useState('50');
  const [v2, setV2] = useState('50');
  const [v3, setV3] = useState('50');
  return(
  <>
   <InputRange variation='none' value={v1} onChange={(e)=>setV1(e.target.value)}/>
   <InputRange variation='price' value={v2} onChange={(e)=>setV2(e.target.value)}/>
   <InputRange variation='number' value={v3} onChange={(e)=>setV3(e.target.value)}/>
  </>
)};

export default App;
