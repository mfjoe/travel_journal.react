import React from 'react';



function Card(props) {

  return (
    <div className="Card">
        <img src={props.imageUrl} alt="card-photo" />
        <div className="card-text">
            <div className="card-location-map">
                <h3 className="card-location"><i class="fa-solid fa-location-dot"></i> {props.location}</h3>
                <a href={props.googleMapsUrl} className="card-map" target="_blank"> View On Google Map</a>
            </div>
            <h2 className="card-title">{props.title}</h2>
            <p className="card-dates">{props.startDate} - {props.endDate}</p>
            <p className="card-description">{props.description}</p>
        </div>
    </div>
  );
}

export default Card;
