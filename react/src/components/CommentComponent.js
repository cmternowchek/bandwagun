import React from 'react';

class CommentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      id: ''
    }

    this.deleteComment = this.deleteComment.bind(this)
  }

  deleteComment(){
    let path = location.pathname
    fetch(`/api/v1/${path}/comments/${this.props.id}`, {
      credentials: 'same-origin',
      method: 'DELETE'
    })
  }

  componentDidMount() {
    let path = location.pathname
    fetch(`/api/v1${path}/comments/${this.props.id}`)
    .then(response => {
      return response.json()
    })
    .then(body => {
      this.setState({
        id: this.props.id
      })
    })
  }

  render() {
    let deleteButton;
    let userIcon = <i className="fa fa-user-circle-o" aria-hidden="true"></i>
    let user2Icon = <i className="fa fa-rebel" aria-hidden="true"></i>
    if(this.props.currentUser != null){
      if(this.props.currentUser.id == this.props.userId){
        deleteButton = <input type='button' value='Delete this comment'  className="button" onClick={this.deleteComment} />
      }
    }
    return (

      <div className="comment-component">
       <h2><span className="icon">{userIcon} </span>{this.props.title}</h2>
       <p>{this.props.body}</p>
       <hr />
        {deleteButton}
      </div>
    );
  }
}


export default CommentComponent;
