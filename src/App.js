import React from 'react';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import SelectedBeast from './SelectedBeast.js';
import data from './data.js';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      data: data,
      show: false,
      title: '',
      src: '',
      description: '',
    };
  }

  // sets the show property
  nowShow = (index) => {
    this.setState({show: true});
    this.setState({title: this.state.data[index].title});
    this.setState({src: this.state.data[index].image_url});
    this.setState({description: this.state.data[index].description});
  }

  nowHide = () => {
    this.setState({show: false});
  }


  //TELL WHAT WILL DISPLAY  

  render() {
    return (
      <div id="app">
        <Header/>
        <Main 
          nowShow={this.nowShow} 
          nowHide={this.nowHide} 
          data={this.state.data}/>
        <SelectedBeast 
          showVar={this.state.show}
          nowHide={this.nowHide}
          title={this.state.title}
          src={this.state.src}
          description={this.state.description}
        />
        <Footer/>
      </div>
    );
  }

}

export default App;
