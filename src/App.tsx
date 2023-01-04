import React from 'react';
import './App.css';
import First from './components/First'
function App() {
  return (
    <div className="App">
      <First name='Rohinish' age={19} handleClick={(event) => console.log('hi')} inputChange={(event)=> console.log(event)} value=''/>
    </div>
  );
}

export default App;
