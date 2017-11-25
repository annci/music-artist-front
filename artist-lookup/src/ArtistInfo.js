import React, { Component } from 'react';
//import renderHTML from 'react-render-html';
import Album from './Album.js';

class ArtistInfo extends Component {

  render() {
  	var description = this.props.description;
    var albums = this.props.albums;
    
    if(albums.length === 0) {
      return (
        <div id="artistInfoDiv" className="Info">
          <h4>Add an artist to search</h4>
        </div>
      );
    }

    console.log('Number of albums: ' + albums.length);
    return (
		<div id="artistInfoDiv" className="Info">
			{description}
			<div>
      			{albums.map(function(album) {
        			return (
          				<Album title={album.title} key={album.id}/>
        			)
      			})}
      		</div>
        </div>
    );
  }
}

export default ArtistInfo;
