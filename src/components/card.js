import React from "react";
export default function Cards(props){
    return(
        <div className="card">
        {!props.openSpots && <div className="card--badge">SOLD OUT</div>}
                <img className="card--image" src={`/images/${props.coverImg}`} />
                <div className="card--stats">
                    <img className="card--star-logo" src='/images/star.png' /> 
                    <span >{props.stats.rating}</span>
                    <span className="gray" >({props.stats.reviewCount}).</span>
                    <span className="gray">{props.location}</span>
                </div>
                <p className="card--title">{props.title}</p>
                <p><span className="bold"> From ${props.price}</span> / person</p>
        </div>
    )
}