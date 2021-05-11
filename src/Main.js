import React from 'react';
import HornedBeasts from './HornedBeasts.js';
import Toad from './toad.jpg';
import Goat from './goat.jpg';



class Main extends React.Component {

  render() {
    return (
      <div id="images">
        <h2>Your Friendly Neighborhood Horned Beasts</h2>
        <HornedBeasts title="Toad" imageUrl={Toad} description="A cute little Horned Toad gazing into the distance."/>
        <p>Photo by <a href="https://unsplash.com/@qeleose?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Cynthia Beilmann</a> on <a href="https://unsplash.com/s/photos/toad-horn?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </p>
        <HornedBeasts title="Goat" imageUrl = {Goat} description="A cute little horned goat standing atop a glorious hill." />
        <p>Photo by <a href="https://unsplash.com/@rayjo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ray Aucott</a> on <a href="https://unsplash.com/s/photos/goat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </p>
      </div>
    );
  }
}

export default Main;
