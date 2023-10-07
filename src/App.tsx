import React from 'react';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import { Countdown } from './Components/Countdown';

const App = (): JSX.Element => {
  return (
    <div>
      <Header heading='Main Header' />
      <div>Welcome React App</div>
      <Countdown count={665} heading='Countdown' />
      <Footer/>
    </div>
  )
}

export default App;