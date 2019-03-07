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

  render() {
    return <button>0</button>;
  }
}

export default App;