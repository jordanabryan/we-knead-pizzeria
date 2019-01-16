import React from 'react';
import glamorous from 'glamorous';
import VisibilitySensor from 'react-visibility-sensor';


const Wrapper = glamorous.div({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	width: '100%',
	height: '100%',
	top: 0,
	left: 0,
	position: 'absolute',
});

const Inner = glamorous.div({
	width: '100px',
	height: '100px'
});


class Loading extends React.Component {
	
	render(){
		return(
			<Wrapper image={this.props.image}>
				<Inner>
					<img src='/assets/loading-icon.gif' alt='loading-pizza' />
				</Inner>
			</Wrapper>
		)
	}

}

export default Loading;