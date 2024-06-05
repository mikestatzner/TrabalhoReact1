import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { TimesDeFutebol } from "./pages/times/TimesDeFutebol";
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      
      <TimesDeFutebol />
    </>
  );
}

export default App;