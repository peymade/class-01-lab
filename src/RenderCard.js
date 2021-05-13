import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';



class RenderCard extends React.Component {


  render() {
    return (
      <div>
        <Card style={{width: '400px'}}>
          <Card.Body>
            <Card.Title>{this.props.title} 💗 {this.props.votes}</Card.Title>
            <img 
              onClick={() => this.props.nowShow(this.props.index)} 
              src = {this.props.src} 
              alt = {(this.props.alt) + ' Picture'} 
              title = {this.props.title} height="200px"/>
            <Card.Text>{this.props.description}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }}

// When this is clicked, change the value of show to true

export default RenderCard;
