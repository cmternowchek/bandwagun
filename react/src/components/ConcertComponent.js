import React from 'react';

const ConcertComponent = props => {

let ticketIcon = <i className="fa fa-ticket" aria-hidden="true"></i>


return(
      <tr>
        <td className="info">{props.artist}</td>
        <td className="info">{props.date}</td>
        <td className="info">{props.city}</td>
        <td className="info">{props.venueName}</td>
        <td className="info"><a href={props.ticketURL}target="_blank">{ticketIcon}</a></td>
        <td className="info"><a href={`/concerts/${props.id}`}>Info</a></td>
        </tr>
  )
}
export default ConcertComponent;
