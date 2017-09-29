import React from 'react';

const ConcertShowComponent = props => {

let ticketIcon = <i className="fa fa-ticket" aria-hidden="true"></i>
let leftArrow = <i className="fa fa-angle-double-left" aria-hidden="true"></i>
let rightArrow = <i className="fa fa-angle-double-right" aria-hidden="true"></i>
let previous = `/concerts/${props.id - 1}`
let next = `/concerts/${props.id + 1}`

return(
  <div>
  <div className="band-name">
  <h1> {props.artist} </h1>
  </div>
      <div className="show-info">
      <span className="info next"><a href={previous}>{leftArrow}</a></span>
      <span className="info">Date: {props.date}</span>
      <span className="info">City: {props.city}</span>
      <span className="info">Venue: {props.venueName}</span>
      <span className="info">Get Tickets: <a href={props.ticketURL}target="_blank">{ticketIcon}</a></span>
      <span className="info next"><a href={next}>{rightArrow}</a></span>
        </div>
  </div>
  )
}
export default ConcertShowComponent;
