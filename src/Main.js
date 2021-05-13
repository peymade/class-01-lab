import React from 'react';
import HornedBeasts from './HornedBeasts.js';
import './App.css';





class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="images">
        <h2>Your Friendly Neighborhood Horned Beasts</h2>
        <div className="card-group">
          {this.props.data.map((beast, index) => {
            return <HornedBeasts
              nowShow={this.props.nowShow} 
              nowHide={this.props.nowHide} 
              index={index}
              title={beast.title}
              src={beast.image_url}
              alt={beast.keyword}
              description={beast.description}
            />;
          })}
        </div>
      </div>
    );
  }
}

export default Main;
