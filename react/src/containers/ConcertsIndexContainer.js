import React, {Component} from 'react';
import ConcertComponent from '../components/ConcertComponent';
import {Link} from 'react-router-dom';

class ConcertsIndexContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      concerts: [],
    }
  }

    componentDidMount(){
       fetch('/api/v1/concerts')
       .then(response => {
         if (response.ok) {
           return response.json();
         } else {
           let errorMessage = `${response.status} ${response.statusText}`,
               error = new Error(errorMessage);
           throw(error);
         }
       })
       .then(body => {
         this.setState({
           concerts: body
         })
       })
       .catch(error => console.error(`Error in fetch: ${error.message}`));
     }


     render() {

         let concertsComponents = this.state.concerts.map((concert) => {
           return (
                 <ConcertComponent
                   key = {concert.id}
                   id = {concert.id}
                   artist = {concert.artist}
                   date = {concert.date}
                   city = {concert.city}
                   venueName = {concert.venue_name}
                   ticketURL = {concert.ticket_URL}
                   />

           )
         })
         return (
           <div className="concert-table">
             <table className="concert-list" width={"80%"}>
             <thead>
              <tr>
               <th>Artist</th>
               <th>Date</th>
               <th>City</th>
               <th>Venue</th>
               <th>Tickets</th>
             </tr>
            </thead>
            <tbody>
           {concertsComponents}
           </tbody>
           </table>
           </div>
         )
      }
}


export default ConcertsIndexContainer;
