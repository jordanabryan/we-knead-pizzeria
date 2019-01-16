import React from 'react';
import glamorous from 'glamorous';
import {Map, InfoWindow, Marker, Polygon, GoogleApiWrapper} from 'google-maps-react';

const MapWrapper = glamorous.div({
	display: 'block',
	position: 'relative',
	width: '100%',
	minHeight: '500px',
	margin: '50px 0'
});

const MapStyle = {
	width: '100%',
	height: '100%',
	display: 'block'
}

class LocationMap extends React.Component{

	render(){
		return (
			<MapWrapper>
				<Map 
					google={this.props.google} 
					style={MapStyle}
					initialCenter={{ lat: 53.648866, lng: -3.004925 }}
					zoom={14}
					scrollwheel={false}
					navigationControl={true}
					mapTypeControl={true}
					scaleControl={false}
					draggable={true} >

					<Marker position={{ lat: 53.648866, lng: -3.004925 }} />

				</Map>
			</MapWrapper>
		)
	}

}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyDCqpQ2iKYWbYsyKk3zRNmoOfV2KFRr-Q8')
})(LocationMap)