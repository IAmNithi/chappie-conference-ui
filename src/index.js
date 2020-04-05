import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';
class App extends React.Component {
  render() {
    return (
      <h1>Hello From Chappie</h1>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
