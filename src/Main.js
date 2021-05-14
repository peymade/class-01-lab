import React from 'react';
import HornedBeasts from './HornedBeasts.js';
import './App.css';
import SearchForm from './SearchForm.js';
import data from './data.js';




class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedNum: null,
      beastArray: data
    };
  }

  handleSubmit = (event) => {
    console.log(event.target.value);
    let numFromForm = parseInt(event.target.value);
    this.setState({ selectedNum: numFromForm },
      this.filterData);

  }

  filterData = () => {

    const filterBeasts = (beast) => {
      // filter based on number of horns
      if (beast.horns === this.state.selectedNum){
        return true;
      } return false;
    };
    
    if (this.state.selectedNum){
      this.setState({ beastArray: this.state.beastArray.filter(filterBeasts) });
    } else {
      this.setState({beastArray: this.state.beastArray});
    }
    
  }


  render() {
    return (
      <div id="images">
        <h2>Your Friendly Neighborhood Horned Beasts</h2>
        <h4>Click on an image to enlarge it, and click on the heart to like the image.</h4>
        <div className="card-group">
          <SearchForm
            handleSubmit={this.handleSubmit} />
          {this.state.beastArray.map((beast, index) => {
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



// Filter the data
// Render just the beasts that are in the category based on what they clicked in the drop down. 
