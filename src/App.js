import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Header from './components/jsx/Header';
import MyIntro from './components/jsx/MyIntro';
import About from './components/jsx/About';
import Skills from './components/jsx/Skills';
import Hobbies from './components/jsx/Hobbies';
import Footer from './components/jsx/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {  
  return (
    <div className="App">
      <Header />
      <MyIntro />
      <About />
      <Skills />
      <Footer />      
    </div>
  );
}   
ReactDOM.render(
  <App />, document.getElementById('root')            
)

export default App;
