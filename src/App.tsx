import React from 'react';
import ButtonLarge from './components/ButtonLarge';

const App: React.FC = () => (
 <>
    <ButtonLarge variation="primary" iconPosition="none" title="TEste" />
    <div style={{height:10}} />
    <ButtonLarge variation="secundary" iconPosition="none" title="TEste" />
    <div style={{height:10}} />
    <ButtonLarge variation="outline" iconPosition="none" title="TEste" />
    <div style={{height:10}} />
    <ButtonLarge variation="ghost" iconPosition="none" title="TEste" />
    <div style={{height:10}} />

  </>
);

export default App;
