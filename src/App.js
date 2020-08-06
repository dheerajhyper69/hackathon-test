import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <h1>Hackathon test Project</h1>
      <Button variant="primary" onClick={() => alert('Cool JavaScript works!')}>Button</Button>
    </div>
  );
}

export default App;
