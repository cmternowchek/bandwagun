
import React, {Component} from 'react';

class CommentForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      body: ''
    }
    this.handleItemChange = this.handleItemChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.clearForm = this.clearForm.bind(this)
  }

  handleItemChange(event){
    event.preventDefault();
    let stateName = event.target.name
    let value = event.target.value
    this.setState({[stateName]: value})
  }


  clearForm(){
    this.setState({
      title: '',
      body: '',
      concert_id: null,
      user_id: null
    })
  }

  handleFormSubmit(event){
    event.preventDefault();

    let commentFormPayLoad = {
      user_id: 1,
      concert_id: this.props.concertId,
      title: this.state.title,
      body: this.state.body,
    }

    this.props.submitFunction(commentFormPayLoad)

    this.clearForm()
  }


  render() {
    return(
      <form className="comment-form" id="comment-form" onSubmit={this.handleFormSubmit}>

        <label htmlFor="Title"></label>
        <input name="title" placeholder="Enter a Title" type="text" id="title" value={this.state.title} onChange={this.handleItemChange}/>
        <br />
        <label htmlFor="body"></label>
        <textarea className="comment-body" id="body" name="body" placeholder="Enter a Comment" value={this.state.body} onChange={this.handleItemChange}/>
        <br />
        <button type="submit" value="Submit" className="button">Submit</button>

      </form>
    )
  }
}

export default CommentForm;
