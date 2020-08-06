import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <h1>Hackathon test Project</h1>
      <Button variant="outline-success" onClick={() => alert('Cool JavaScript works! Testing for Dom')}>Button</Button>
    </div>
  );
}

export default App;
