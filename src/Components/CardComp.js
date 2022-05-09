import React from 'react';
import './Card.css'

function CardComp(props) {
    return (
        <div className="card">
            <div className="header-img">
                <img src={props.item.imageUrl} alt="" />
            </div>
            <div className="text-wrapper">
                <div className="location-wrapper">
                    <i className="fa fa-location-dot"></i>
                    <p className="country">{props.item.location}</p>
                    <a href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="location">{props.item.title}</h1>
                <p className="date">{props.item.startDate} - {props.item.endDate}</p>
                <p className="description">
                    {props.item.description}
                </p>
            </div>
        </div>
    )
}

export default CardComp;