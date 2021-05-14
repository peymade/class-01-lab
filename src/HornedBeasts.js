import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RenderCard from './RenderCard.js';


class HornedBeasts extends React.Component {

  constructor(props) {
    super(props);
    this.state= {
      votes: 0
    };
  }

  voteBeast = () => {
    this.setState({votes: this.state.votes + 1});
  }

  render() {
    return (
      <div key={this.props.index}>
        <div key="RenderDiv" className="card">
          <RenderCard 
            nowShow={this.props.nowShow} 
            nowHide={this.props.nowHide} 
            title={this.props.title} 
            votes={this.state.votes} 
            index={this.props.index}
            voteFunction={this.voteBeast}
            src = {this.props.src} 
            alt = {(this.props.alt) + ' Picture'}
            title = {this.props.title}/>
        </div>
      </div>
    );
  } }


export default HornedBeasts;

// Access the data array, and number of horns

// If data[i].horns == input number, render it 
