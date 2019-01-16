import React from 'react';
import glamorous from 'glamorous';

const Wrapper = glamorous.div({
	background: '#6d2121',
    color: '#fff'
})

const WrapperInner = glamorous.div({
	display: 'table',
	maxWidth: '1100px',
	width: '100%',
	margin: '0 auto',
	padding: '15px',
})

const Copyright = glamorous.div({
	display: 'table-cell',
	verticalAlign: 'middle',
	width: '50%',
	fontSize: '80%',

	'@media(max-width: 855px)':{
		display: 'block',
		width: '100%',
		textAlign: 'center',
		marginBottom: '10px',
	}

})

const Develop = glamorous.div({
	display: 'table-cell',
	verticalAlign: 'middle',
	width: '50%',
	textAlign: 'right',
	fontSize: '80%',
	marginBottom: '0px',

	'@media(max-width: 855px)':{
		display: 'block',
		width: '100%',
		textAlign: 'center',
	},

	'& a':{
		color: '#fff',
		textDecoration: 'none'
	}

})

class BottomFooter extends React.Component{
	render(){
		return(
			<Wrapper>
				<WrapperInner>
					<Copyright>
						<span>Copyright We Knead Pizzeria 2018 | All Rights Reserved</span>
					</Copyright>
					<Develop>
						<span>Developed By <a target='_blank' href='http://lime-house-studio.co.uk'>Lime House Studio</a> 2017</span>
					</Develop>
				</WrapperInner>
			</Wrapper>
		)
	}
}


export default BottomFooter;
