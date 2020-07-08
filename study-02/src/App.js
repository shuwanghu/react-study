import React from 'react';
import logo from './logo.svg';
import './App.css';
class ButtonGroup extends React.Component {
  constructor(props) {
    super(props)
    this.state = { clickedList: props.buttons.map(x => false) }
  }
  onclickbtn = (index) => {
    const clickedList = this.state.clickedList;
    clickedList[index] = !clickedList[index]
    this.setState({ clickedList: clickedList })
  }
  render() {
    const buttonList = this.props.buttons.map(
      (btn, index) =>
        <button
          onClick={() => this.onclickbtn(index)}
          key={btn} id={btn}>
          {this.state.clickedList[index] ? 'on' : 'off'}
        </button>
    )
    return (
      buttonList
    )
  }
}

class ErrorBoundary extends React.Component {
  componentDidCatch() {

  }
}

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        Hello world
        <ButtonGroup buttons={[0, 1, 2]}></ButtonGroup>
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    </ErrorBoundary>
  );
}

export default App;
