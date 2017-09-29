import React, {Component} from 'react';
import ConcertComponent from '../components/ConcertComponent';
import ConcertShowComponent from '../components/ConcertShowComponent';
import {Link} from 'react-router-dom';

class ConcertsIndexContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      search: '',
      concerts: [],
      artistID: '',
      artistNAME:'',
    }
    this.handleItemChange = this.handleItemChange.bind(this)
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
  }

  handleSearchSubmit(event){
    event.preventDefault();
    let formPayload = {
      search: this.state.search.replace(/\s/g, "+")
    }
    fetch(`/api/v1/concerts?artist_name=${formPayload.search}`)
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
        concerts: body,
        artistNAME: body[0].artist
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handleItemChange(event){
    event.preventDefault();
    let stateName = event.target.name
    let value = event.target.value
    this.setState({[stateName]: value})
  }


  render() {
    let searchResults = '';
    if (this.state.artistNAME === '' ){searchResults = 'hidden'}
    else {searchResults = 'concert-table'}

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
      <div>
        <form className="search"onSubmit={this.handleSearchSubmit}>
          <label htmlFor="search"></label>
          <input name="search" placeholder="Search for a band on tour" value={this.state.search} onChange={this.handleItemChange}/>
          <button className="button" type="submit">Submit</button>
        </form>

        <div className={searchResults}>
          <table className="concert-list" width={"80%"}>
          <thead>
          <tr>
          <th>Artist</th>
          <th>Date</th>
          <th>City</th>
          <th>Venue</th>
          <th>Tickets</th>
          <th>Info</th>
          </tr>
          </thead>
          <tbody>
            {concertsComponents}
          </tbody>
          </table>
        </div>
      </div>
    )
  }
}


export default ConcertsIndexContainer;
