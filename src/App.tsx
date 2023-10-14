import React from 'react';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import { Countdown } from './Components/Countdown';

const App = (): JSX.Element => {
  return (
    <div>
      <Header heading='React Pre Build Components' navItem='Home' />
      <div>Welcome React App</div>
      <Countdown count={0} heading='Countdown' />
      <Footer heading="Copyright"/>
    </div>
  )
}

export default App;