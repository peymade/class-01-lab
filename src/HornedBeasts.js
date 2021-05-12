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
      <div>
        <div class="card">
          <RenderCard title={this.props.title} votes={this.state.votes} callback={this.voteBeast} src = {this.props.src} alt = {(this.props.alt) + ' Picture'} title = {this.props.title}/>
        </div>
      </div>
    );
  } }


export default HornedBeasts;
