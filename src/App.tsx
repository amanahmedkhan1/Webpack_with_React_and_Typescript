import React from 'react';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Header heading='Main Header' />

      <div>Welcome React App</div>
      
      <Footer/>
    </div>
  )
}

export default App;