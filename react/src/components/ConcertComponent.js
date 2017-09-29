import React from 'react';

const ConcertComponent = props => {

let ticketIcon = <i className="fa fa-ticket" aria-hidden="true"></i>


return(
      <tr>
        <td className="info">{props.artist}</td>
        <td className="info">{props.date}</td>
        <td className="info">{props.city}</td>
        <td className="info">{props.venueName}</td>
        <td className="info tickets"><a href={props.ticketURL}target="_blank">{ticketIcon}</a></td>
        <td className="info lets-go"><a href={`/concerts/${props.id}`}>Let's Go!</a></td>
        </tr>
  )
}
export default ConcertComponent;
