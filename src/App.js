import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import { Component } from 'react';

class App extends Component {
  render()
  {
  return (
    <div className="dark-background-color">
      <header className="App-header">
        <img src={logo} lat="logo" />
        <h2>lets change </h2>
      </header>
    </div>
   );
  }
}

export default App;
