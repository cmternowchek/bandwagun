import React, {Component} from 'react';
import ConcertComponent from '../components/ConcertComponent';
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
    fetch(`http://api.jambase.com/artists?name=${formPayload.search}&page=0&api_key=j5z2vswfvvvspvu9s9sbzewh`)
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
        artistID: body.Artists[0].Id,
        artistNAME: body.Artists[0].Name
      })
      let artistName = body.Artists[0].Name;
      let artistId = body.Artists[0].Id;
      fetch(`http://api.jambase.com/events?artistId=${artistId}&page=0&api_key=j5z2vswfvvvspvu9s9sbzewh`)
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
          concerts: body.Events
        })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
    })
  }


  handleItemChange(event){
    event.preventDefault();
    let stateName = event.target.name
    let value = event.target.value
    this.setState({[stateName]: value})
  }


  render() {
    let searchResults = '';
    if (this.state.artistID == '' ){searchResults = 'hidden'}
    else {searchResults = 'concert-table'}

    let concertsComponents = this.state.concerts.map((concert) => {

      return (
        <ConcertComponent
        key = {concert.id}
        id = {concert.id}
        artist = {this.state.artistNAME}
        date = {concert.Date}
        city = {concert.Venue.City}
        venueName = {concert.Venue.Name}
        ticketURL = {concert.TicketUrl}
        />

      )
    })

    return (
      <div>
        <form className="search"onSubmit={this.handleSearchSubmit}>
          <label htmlFor="search"></label>
          <input name="search" placeholder="Search" value={this.state.search} onChange={this.handleItemChange}/>
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
