import React from 'react';
import glamorous from 'glamorous';

const icon = require('../assets/pizza-icon.png');

const Wrapper = glamorous.div({
	background: 'url(/assets/pizza.jpg)',
	backgroundSize: 'cover',
	minHeight: '300px',
	padding: '30px 0',
	position: 'relative',
	borderBottom: 'solid 4px #6d2121',

	'&:before':{
		content: "''",
		top: '0',
		left: '0',
		width: '100%',
		height: '100%',
		position: 'absolute',
		background: 'rgba(0, 0, 0, 0.4)',
	}

});

const Inner = glamorous.div({
	maxWidth: '1100px',
	width: '100%',
	height: '100%',
	margin: '0 auto',
	display: 'table',
	zIndex: '2',
	position: 'relative',
});

const Content = glamorous.div({
	display: 'table-cell',
	verticalAlign: 'middle',
	textAlign: 'center',
	color: '#fff',
});

const Title = glamorous.h1({
	fontSize: '5em',
	textShadow: '0 0 10px #333',
	fontFamily: "'Satisfy', cursive",
})

const ImageHolder = glamorous.div({
	width: '90px',
	margin: '0 auto',
});

const Subtitle = glamorous.div({
	fontFamily: "'Satisfy', sans-serif",
	fontSize: "2em",
});


class Header extends React.Component{

	render(){
		return (
			<Wrapper>
				<Inner>
					<Content>
						<Title>We Knead Pizzeria</Title>
						<ImageHolder>
							<img src={ icon } />
						</ImageHolder>
						<Subtitle>Pizza Takeaway Southport</Subtitle>
					</Content>
				</Inner>
			</Wrapper>	
		)
	}

}


export default Header;