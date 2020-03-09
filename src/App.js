import React from 'react';
import './App.css';
import Admin from './components/Admin';
class App extends React.Component{
 
  render(){
    return(
      <div className="App">
      <header className="App-header">
       <h1 >Admin Panel</h1>
      </header>
      <Admin />
      <br/><br/> <br/>
    </div>
    );
  }
}

export default App;