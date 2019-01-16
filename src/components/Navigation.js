import React from 'react';
import glamorous from 'glamorous';
import { Link } from 'react-router-dom';

const Wrapper = glamorous.div({});

const Inner = glamorous.div({
	display: 'flex',
	maxWidth: '1100px',
	width: '100%',
	margin: '0 auto',
	padding: '0 10px',
	alignItems: 'center',

	'@media(min-width: 624px) and (max-width: 880px)': {
		padding: '10px'
	},

	'@media(max-width: 624px)': {
		padding: '20px'
	}

})

const Contact = glamorous.div({
	width: '30%',
	fontSize: '70%',

	'@media(max-width: 880px)': {
		width: '100%'
	}

});

const DesktopBreak = glamorous.span({
	display: 'inline-block',

	'@media(max-width: 855px)':{
		display: 'none'
	} 
});

const MobileBreak = glamorous.br({
	display: 'none',

	'@media(max-width: 855px)': {
		display: 'block'
	}
});

const NavButton = glamorous.div({
	display: 'none',
	cursor: 'pointer',

	'@media(max-width: 880px)': {
		display: 'flex',
		alignItems: 'center',
		width: '40px',
		height: '40px',
	},
})

const NavButtonInner = glamorous.div({
	display: 'block',
	width: '40px',
	margin: '0 0 0 auto'
})

const Line = glamorous.span({
	width: '40px',
	display: 'block',
	position: 'relative',
	borderBottom: 'solid 4px #6d2121',
	margin: '0 auto',
	height: '4px',
	transition: 'all 500ms',

	'.open &':{
		height: '0px',
		borderBottom: 'none'
	},

	'&:before': {
		content: "''",
		width: '40px',
		display: 'block',
		position: 'relative',
		borderBottom: 'solid 4px #6d2121',
		margin: '0 auto',
		top: '-8px',
		transition: 'all 500ms',
		transform: 'rotate(0deg)',

		'.open &':{
			transform: 'rotate(45deg)',
			top: '0px',
			width: '30px',
		},


	},

	'&:after': {
		content: "''",
		width: '40px',
		display: 'block',
		position: 'relative',
		borderBottom: 'solid 4px #6d2121',
		margin: '0 auto',
		bottom: '-4px',
		transition: 'all 500ms',
		transform: 'rotate(0deg)',

		'.open &':{
			transform: 'rotate(-45deg)',
			bottom: '4px',
			width: '30px',
		},
	}
})

const MainNav = glamorous.div({
	width: '70%',
	textAlign: 'right',
	padding: '0',

	'@media(max-width: 880px)': {
		display: 'none',
		opacity: '0',
		position: 'absolute',
		left: '0',
		top: '60px',
		zIndex: '3333',
		background: '#fff',
		width: '100%',
		transition: 'all 500ms',
	},

	'& ul': {
		listStyle: 'none',
	
		'& li': {
			display: 'inline-block',
		
			'& a': {
				display: 'block',
				padding: '20px 10px',
				textDecoration: 'none',
				textTransform: 'uppercase',
				fontSize: '85%',
				transition: 'all 500ms',

				'&:hover':{
					background: '#a52727',
					color: '#fff'
				}
			}
		}
	},

	'.open &': {

		'@media(max-width: 624px)': {
			display: 'block',
			opacity: '1',
			position: 'absolute',
			left: '0',
			top: '63px',
			zIndex: '3333',
			background: '#fff',
			width: '100%',
			boxShadow: '0 5px 5px #aaa',
			transition: 'all 500ms',

		},

		'@media(min-width: 624px) and (max-width: 880px)': {
			display: 'block',
			opacity: '1',
			position: 'absolute',
			left: '0',
			top: '55px',
			zIndex: '3333',
			background: '#fff',
			width: '100%',
			boxShadow: '0 5px 5px #aaa',
			transition: 'all 500ms',

		},
	
		'& ul':{
		
			'& li': {
				'@media(max-width: 880px)': {
					display: 'block',
					textAlign: 'left'
				}
			}
		}
	}
	
});

class Navigation extends React.Component {

	constructor(props){
		super(props);

		this.navClick = this.clickEvent.bind(this);

	}

	clickEvent(){

		const _body = document.body;
		
		if(!_body.classList.contains('open')){
			_body.classList.add('open');
		} else {
			_body.classList.remove('open');
		}

	}

	render(){
		return(
			<Wrapper>
				<Inner>
					<Contact>
						<p>
							Lord Street, Southport
							&nbsp;
							<DesktopBreak>|</DesktopBreak>
							&nbsp;
							<MobileBreak></MobileBreak> 
							01234 567890
						</p>
					</Contact>
					<MainNav>
						<ul>
							<li><Link onClick={this.navClick} to='/'>home</Link></li>
							<li><Link onClick={this.navClick} to='/pizza-menu'>pizza menu</Link></li>
							<li><Link onClick={this.navClick} to='/burger-menu'>burger menu</Link></li>
							<li><Link onClick={this.navClick} to='/sides-menu'>side orders</Link></li>
							<li><Link onClick={this.navClick} to='/find-us'>find us</Link></li>
						</ul>
					</MainNav>
					<NavButton onClick={this.navClick}>
						<NavButtonInner>
							<Line></Line>
						</NavButtonInner>
					</NavButton>
				</Inner>
			</Wrapper>
		)
	}

}

export default Navigation;