import React from 'react';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';

class App extends React.Component {
  constructor() {
    super();
  }

  //TELL WHAT WILL DISPLAY  

  render() {
    return (
      <div id="app">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }


}

export default App;
