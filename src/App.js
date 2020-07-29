import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Home from './components/Home.js'
import 'bootstrap/dist/css/bootstrap.min.css';


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
