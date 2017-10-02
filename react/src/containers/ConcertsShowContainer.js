import React, {Component} from 'react';
import ConcertShowComponent from '../components/ConcertShowComponent';
import CommentComponent from '../components/CommentComponent';
import CommentForm from '../components/CommentForm';

class ConcertsShowContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
    concert: {},
    comments: [],
    currentUser: null
    }
    this.addComment = this.addComment.bind(this)
    this.aggregateComment = this.aggregateComment.bind(this)
  }

  aggregateComment(){
    setTimeout(function(){let path = location.pathname
      fetch(`/api/v1/${path}/`)
      .then(response => {
        return response.json();
      })
      .then(body => {
        console.log(body)
        this.setState({
          concert: body.concert,
          comments: body.comments,
        })
      })}.bind(this), 100)
  }

  addComment(formPayload) {
    let path = location.pathname
    fetch(`/api/v1/${path}/comments`, {
      method: 'POST',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formPayload)
    })
    this.aggregateComment()
  }

  componentDidMount(){
    let location = this.props.match.params.id
    let url = `/api/v1/concerts/${location}`
      fetch(url)
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
        concert: body.concert,
        comments: body.comments,
        currentUser: 1
        })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

    render () {
      let allTheRoomsMap="http://www.google.com"

      let CommentComponents = this.state.comments.map((comment) => {
      return (
        <CommentComponent
          key = {comment.id}
          id = {comment.id}
          title = {comment.title}
          body = {comment.body}
          currentUser = {this.state.currentUser}
          userId = {comment.user_id}
        />
        )
      })
    return (
        <div>
          <ConcertShowComponent
            key={this.state.concert.id}
            artist={this.state.concert.artist}
            id={this.state.concert.id}
            date={this.state.concert.date}
            city={this.state.concert.city}
            venueName={this.state.concert.venue_name}
            ticketURL={this.state.concert.ticket_URL}
          />
          <div className="row">
            <div className="column stuff">
              {CommentComponents}
              <div className="comment-form">
                <CommentForm concertId={this.state.concert.id} submitFunction={this.addComment}/>
              </div>
            </div>
            <div className="iframe column">
              <iframe src={allTheRoomsMap} width="100%" height="750"></iframe>
            </div>
          </div>
        </div>
      )}
}

export default ConcertsShowContainer;
