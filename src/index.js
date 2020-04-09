import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';
import Login from './Components/Login';
class App extends React.Component {
  render() {
    return (
      <div>
      <h1>Hello From Chappie</h1>
      <Login />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
