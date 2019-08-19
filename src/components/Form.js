import React, {Component} from 'react';


class Form extends Component {
  state = {
    searchText: ''
  }

// Update the searchText state when user search new term
  newSearchText = (e) => {
    this.setState({
      searchText: e.target.value
    });
  }


  render () {
    return (
      <form className="form" onSubmit={(e) => this.props.handleSubmit(e, this.props.history, this.state.searchText)}>
        <input className="input" type="text" name="search" placeholder="Search.." required onChange={this.newSearchText}/>
        <button className="form-button" type="submit">
          <svg fill="#fff" height="22" width="22" viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
        </button>
      </form>
    );
  }
}




export default Form;