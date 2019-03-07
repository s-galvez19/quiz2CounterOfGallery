import React, { Component } from 'react';
import './App.css';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter count={5}/>
      </div>
    );
  }
}

class Counter extends Component {

  render() {
    return <button>{this.props.count}</button>;
  }
}

export default App;