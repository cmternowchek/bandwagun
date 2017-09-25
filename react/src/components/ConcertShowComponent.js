import React from 'react';

const ConcertShowComponent = props => {

let ticketIcon = <i className="fa fa-ticket" aria-hidden="true"></i>


return(
  <div>
  <h1> ConcertShow Page</h1>
      <ul>
        <li className="info">{props.artist}</li>
        <li className="info">{props.date}</li>
        <li className="info">{props.city}</li>
        <li className="info">{props.venueName}</li>
        <li className="info"><a href={props.ticketURL}target="_blank">{ticketIcon}</a></li>
        </ul>
  </div>
  )
}
export default ConcertShowComponent;
