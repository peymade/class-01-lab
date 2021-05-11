import React from 'react';


class HornedBeasts extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <img src = {this.props.imageUrl} alt = {(this.props.title) + ' Picture'} title = {this.props.title} height="200px"/>
        <p>{this.props.description}</p>
      </div>
    );
  }
}


export default HornedBeasts;
