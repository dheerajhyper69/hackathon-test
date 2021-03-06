import React from 'react';
import './App.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { variant: 'primary' };
  }

  handleSelect = (e) => {
    this.setState({ variant: e });
  }

  render() {
    return (
      <div className="App">
        <h1>Hackathon test Project by Us</h1>
        <br />
        <p>Change the color of the button by choosing a template in the dropdown!</p>
        <DropdownButton
          title="Set Button Color "
          onSelect={this.handleSelect}
          variant={this.state.variant}
        >
          {['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger'].map(
            (variant) => {
              return (
                <Dropdown.Item eventKey={variant.toLowerCase()}>{variant}</Dropdown.Item>
              )
            }
          )}
        </DropdownButton>
      </div>
    );
  }
}

export default App;
