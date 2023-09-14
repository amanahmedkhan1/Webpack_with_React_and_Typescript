import React from 'react';
import { Countdown } from './Components/Countdown';

const App = () => {
  return (
    <div>
      <div>React App Component</div>
      <Countdown count={665} />
    </div>
  )
}

export default App;