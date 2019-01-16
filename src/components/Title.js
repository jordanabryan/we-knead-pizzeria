import React from 'react';
import glamorous from 'glamorous';


const TitleWrap = glamorous.div({
	fontFamily: '"Satisfy", cursive',
	textAlign: 'center',
	paddingBottom: '10px',
	marginBottom: '10px',
	fontSize: '2.5em',

	'&:after':{
		content: "''",
		marginTop: '10px',
		display: 'block',
		width: '100px',
		borderBottom: 'solid 2px #a52727',
		margin: '10px auto',
	}
})

class Title extends React.Component{
	render(){
		return(
			<TitleWrap>
				<h3>{ this.props.title }</h3>
			</TitleWrap>
		)
	}
}

export default Title;