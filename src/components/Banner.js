import React from 'react';
import glamorous from 'glamorous';
import VisibilitySensor from 'react-visibility-sensor';

const Wrapper = glamorous.div(props => {
	return{
		backgroundSize: 'cover',
		height: '300px',
		position: 'relative',
		backgroundPosition: 'center bottom',
		backgroundImage: `url('${props.image}')`,

		'@media(max-width: 624px)': {
			padding: '40px 20px',
			height: 'initial',
		},
		
		'&:before': {
			content: "''",
			top: '0',
			left: '0',
			width: '100%',
			height: '100%',
			position: 'absolute',
			background: 'rgba(0, 0, 0, 0.6)'
		}
	}
});

const Inner = glamorous.div({
	display: 'table',
	width: '100%',
	height: '100%',
	position: 'relative',
	zIndex: '2',
});

const Content = glamorous.div(props => {
    if(props.active === true){
		return{
			display: 'table-cell',
			verticalAlign: 'middle',
			textAlign: 'center',
			color: '#fff',
			opacity: '0',
			transition: 'all 500ms'
		}
	} else if(props.active === false){
		return{
			display: 'table-cell',
			verticalAlign: 'middle',
			textAlign: 'center',
			color: '#fff',
			opacity: '1',
			transition: 'all 500ms'
		}
	}
})

const Title = glamorous.div({
	fontSize: '5em',
	textShadow: '0 0 10px #333',
	fontFamily: "'Satisfy', cursive"
})


class Banner extends React.Component {
	
	render(){
		return(
			<VisibilitySensor>
				{({isVisible}) =>

					<Wrapper image={this.props.image}>
						<Inner>
							<Content active={ isVisible ? false : true}>
								<Title>{ this.props.title }</Title>
								<p>{ this.props.content }</p>
							</Content>
						</Inner>
					</Wrapper>
				}
			</VisibilitySensor>
		)
	}

}

export default Banner;