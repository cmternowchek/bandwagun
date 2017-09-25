import React, {Component} from 'react';
import ConcertShowComponent from '../components/ConcertShowComponent';

class ConcertsShowContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      concert: {},

    }
  }

  componentDidMount(){
      let path = location.pathname
      fetch(`/api/v1/${path}/`, {
        credentials: 'same-origin'
      })
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
          concert: body[0],
        })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

    render () {
      return(
      <div>
        <ConcertShowComponent
          key = {this.state.concert.id}
          id = {this.state.concert.id}
          artist = {this.state.concert.artist}
          date = {this.state.concert.date}
          city = {this.state.concert.city}
          venueName = {this.state.concert.venueName}
          ticketURL = {this.state.concert.ticketURL}
        />
        </div>
      )}

}
    export default ConcertsShowContainer;
