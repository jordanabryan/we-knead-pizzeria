import React from 'react';
import glamorous from 'glamorous';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';	


const Wrapper = glamorous.div({
    background: '#a52727',
    color: '#fff',
    fontSize: '1em'
});


const Inner = glamorous.div({
	display: 'table',
	maxWidth: '1100px',
	width: '100%',
	margin: '0 auto',
	padding: '20px',
});


const Contact = glamorous.div({
	display: 'table-cell',
	verticalAlign: 'top',
	width: '35%',
	paddingLeft: '20px',

	'@media(max-width: 624px)':{
		display: 'block',
		width: '100%',
		textAlign: 'center',
		padding: '0px',
	},

	'& p': {
		fontSize: '1em',
	}

})

const FooterTitle = glamorous.div({
	fontFamily: "'Satisfy', cursive",
    fontSize: '2em',
})


const SocialIcons = glamorous.div({
	fontSize: '2em'
})

const Info = glamorous.div({
	display: 'table-cell',
	verticalAlign: 'middle',
	width: '65%',

	'@media(max-width: 624px)':{
		display: 'none',
		textAlign: 'center',
	},

	'& p':{
		fontSize: '1em',
	}
})

const Nav = glamorous.div({
	marginTop: '10px',

	'& li':{
		display: 'inline-block',
		marginBottom: '5px',

		'& a':{
			textDecoration: 'none',
			color: 'white',

			'&:hover':{

			}
		}
	}
})

const SocialLink = glamorous.a({
	color: '#fff',
	textDecoration: 'none'
})


class TopFooter extends React.Component{
	render(){
		return(
			<Wrapper>
				<Inner>
					<Info>
						<p>Free delivery avaliable on orders over &pound;10. For orders between &pound;7 and &pound;10 there will be a &pound;1 delivery charge. Orders for delivery only taken after 5pm. We accept all major debit &amp; credit cards.</p>
						<p>We are not a fast food outlet. All our food is cooked fresh to order. Your food will be delivered in the quickest time possible.Thank you for your patients.</p>
						<p><strong>Allery Info:</strong> Some toppings, desserts and ice cream may contain traces of nuts. Due to the nature of our kitchen, it is unfortunately not possible to give a total guaantee that minute traces of particular allergens may not be present in certain dishes, but we will endevour o provide as much information as possible for you to make an informed choice.</p>
						<p>Awarded &nbsp;
							<FontAwesome name='star' />&nbsp;
							<FontAwesome name='star' />&nbsp;
							<FontAwesome name='star' />&nbsp;
							<FontAwesome name='star' />&nbsp;
							<FontAwesome name='star' />&nbsp;
						</p>
						<Nav>
							<li><Link to='/'>home</Link>&nbsp;|&nbsp;</li>
							<li><Link to='/pizza-menu'>pizza menu</Link>&nbsp;|&nbsp;</li>
							<li><Link to='/burger-menu'>burger menu</Link>&nbsp;|&nbsp;</li>
							<li><Link to='/sides-menu'>side orders</Link>&nbsp;|&nbsp;</li>
							<li><Link to='/find-us'>find us</Link></li>
						</Nav>
					</Info>
					<Contact>
						<div>
							<FooterTitle>We Knead Pizzeria</FooterTitle>
						</div>
						<div>
							<p>Lord Street, Southport</p>
							<p>01234 567890</p>
							<p>Sunday to Thursday - 5pm to 10pm</p>
							<p>Friday & Saturday - 5pm to 11pm</p>
						</div>
						<SocialIcons>
							<p>
								<SocialLink href='#' target='_blank'>
									<FontAwesome name='facebook-square' />
								</SocialLink>&nbsp;&nbsp;
								<SocialLink href='#' target='_blank'>
									<FontAwesome name='twitter-square' />
								</SocialLink>&nbsp;&nbsp;
								<SocialLink href='#' target='_blank'>
									<FontAwesome name='instagram' />
								</SocialLink>&nbsp;&nbsp;
							</p>
						</SocialIcons>
					</Contact>
				</Inner>
			</Wrapper>
		)
	}
}

export default TopFooter;