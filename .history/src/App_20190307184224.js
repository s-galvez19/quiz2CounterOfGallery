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

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // change code below this line
    this.increment = this.increment.bind(this)
    this.reset = this.reset.bind(this)
    // change code above this line
  }
  // change code below this line
  increment() {
    this.setState({
      count: this.state.count + 1
    })
  }


  reset() {
    this.setState({
      count: 0
    })
  }

  // change code above this line
  render() {
    return (
      <div>
        <button className='inc' onClick={alert('Welcome!')} onClick={this.increment}>New Person!</button>
        <button className='reset' onClick={alert('Are You Sure?')} onClick={this.reset}>Reset By The End Of The Day</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};

export default App;