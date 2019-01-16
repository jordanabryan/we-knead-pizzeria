import React from 'react';
import glamorous from 'glamorous';

const Wrapper = glamorous.div(props => {
	return {
		position: 'relative',
	    height: '100%',
	    width: '100%',
	    overflow: 'hidden',
	    backgroundPosition: 'center',
	    backgroundSize: 'cover',
	    backgroundImage: `url(${props.bgImage})`,

		'&:after':{
			content: "''",
			position: 'absolute',
			top: '0',
			left: '0',
			width: '100%',
			height: '100%',
			background: 'rgba(0, 0, 0, 0.4)',
			display: 'block',
		}
	}
});

const Overlay = glamorous.div({
	position: 'absolute',
	zIndex: '2',
	top: '0',
	left: '0',
	width: '100%',
	height: '100%',
	display: 'block',
	textAlign: 'center',
	color: '#fff',
	fontSize: '2em',
});

const OverlayInner = glamorous.div({
	display: 'table',
	height: '100%',
	width: '100%',
	padding: '10px',
});

const OverlayContent = glamorous.span({
	display: 'table-cell',
    verticalAlign: 'middle',
    textAlign: 'center',
});

const Image = glamorous.img({
	width: '100%',
	height: 'auto',
	display: 'block',
})

class HoverImage extends React.Component {

	render(){
		return(
			<Wrapper bgImage={ this.props.src }>
				<Overlay>
					<OverlayInner>
						<OverlayContent>{this.props.content}</OverlayContent>
					</OverlayInner>
				</Overlay>
			</Wrapper>
		)
	}

}

export default HoverImage;
