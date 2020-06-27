import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Home from './components/Home.js'

function App() {  
  return (
    <div className="App">
      <Home />
    </div>
  );
}   
ReactDOM.render(
  <App />, document.getElementById('root')
)

export default App;
