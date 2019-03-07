import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
      </div>
    );
  }
}

class Counter extends Component {
  state = {
    count: 0
  };
  render() {
    return <button onClick={() => this.setState({ counter: this.state.counter + 1})}>{this.state.count}</button>;
  }
}

export default App;