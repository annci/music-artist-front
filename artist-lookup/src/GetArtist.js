import React, { Component } from 'react';

class GetArtist extends Component {

	constructor(props) {
		super(props);
		
		this.state = {value: ''};
	}
	
  handleSubmit(e) {
      e.preventDefault(); // this prevents the page from reloading
      this.setState({value: this.refs.id.value}, function() {
      	this.props.getArtist(this.state);
      });
  }

  render() {
    return (
      <div id="getArtistDiv">
      <form onSubmit={this.handleSubmit.bind(this)}>
      <div id='getArtist'>
      <label>MusicBrainz Identifier?&nbsp;
      <input type='text' ref='id' id='newID' size='50'></input>
      </label>
      </div><br />
      <input type='submit' value='Get Artist' />
      </form>
      </div>
    );
  }
}

export default GetArtist;
