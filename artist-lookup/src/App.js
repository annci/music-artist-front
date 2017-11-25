import React, { Component } from 'react';
import GetArtist from './GetArtist.js';
import ArtistInfo from './ArtistInfo.js';
import './App.css';
/* global $ */

class App extends Component {

	constructor() {
		super();
		this.state = {
			description: '',
			albums: []
		};
	}
	
	/**
	* Takes the state of an GetArtist component as its parameter
	* and gets the artist lookup info
	*/
	handleGetArtist(s) {
		let url = 'http://localhost:8080/artist?mbid=' + s.value;
		
		$.getJSON(url, function(data, status) {
			console.log('description: ' + data.description);
			this.setState({description: data.description});
			this.setState({albums: data.albums});
			return ;
		}.bind(this));
		console.log('MBID = ' + s.value);
	}
	
	/**
	* Renders the component
	*/
	render() {
		return (
			<div className="App">
				<GetArtist getArtist={this.handleGetArtist.bind(this)} />
				<div id="artistInfoDiv" className="Info">
          			<ArtistInfo description={this.state.description} 
          			albums={this.state.albums}  />
        		</div>
			</div>
			);
  	}
}

export default App;
