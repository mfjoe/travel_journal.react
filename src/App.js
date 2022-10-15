import React from 'react';
import "./stylesheets.css"

import data from "./data.js"
import Navbar from "./components/Navbar"
import Card from './components/Card';


function App() {
  const cardElement = data.map((item) => {
    return (
      <Card 
        key={item.id}
        title={item.title}
        location={item.location}
        googleMapsUrl={item.googleMapsUrl}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
        imageUrl={item.imageUrl}
      />
    )
  })

  return (
    <div className="App">
      <Navbar />
      {cardElement}
    </div>
  );
}

export default App;
