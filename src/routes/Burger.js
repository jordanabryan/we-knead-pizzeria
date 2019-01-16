import React from 'react';
import glamorous from 'glamorous';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DocumentMeta from 'react-document-meta';

import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Banner from '../components/Banner';
import FactBar from '../components/FactBar';
import TopFooter from '../components/TopFooter';
import BottomFooter from '../components/BottomFooter';

import Title from '../components/Title';
import HoverImage from '../components/HoverImage';

import * as burgerActions from '../actions/burgerActions';


const Wrapper = glamorous.div({
	padding: '60px 0',
	position: 'relative',

	'@media(max-width: 624px)':{
		padding: '60px 20px',
	}
})

const WrapperInner = glamorous.div({
	maxWidth: '1100px',
	width: '100%',
	margin: '0 auto'
});

const ProductHolder = glamorous.div({
	width: '100%',
	minHeight: '80px',
	borderBottom: 'solid 1px #ccc',
	padding: '15px 10px 25px 10px',
	display: 'flex',
	flexWrap: 'wrap',

	'&:nth-child(even)': {
		background: '#fbf7f7',
	},

	'&:last-child': {
		borderBottom: 'none',
	},

	'@media(max-width: 855px)': {
		marginBottom: '0px'
	}
})

const ProductTitle = glamorous.h3({
	display: 'inline-block',
});

const ProductContent = glamorous.div({
	display: 'flex',
	flexWrap: 'wrap',
	width: 'calc(100% - 75px)',
});

const ProductDescription = glamorous.p({
	display: 'block',
	paddingTop: '5px',
	fontSize: '1em'
});

const BurgerDescription = glamorous.div({
	display: 'table-cell',
	verticalAlign: 'middle',
	width: '60%',

	'@media(max-width: 855px)':{
		display: 'block',
		width: '100%',
	}
});


const ProductPrice = glamorous.div({
	display: 'table-cell',
	verticalAlign: 'middle',
	width: '40%',

	'@media(max-width: 855px)':{
		display: 'block',
		width: '100%',
	}
});

const PricesInner = glamorous.div({
	display: 'table',
	width: '100%',

	'& p': {
		display: 'table-cell',
		verticalAlign: 'middle',
		width: '16%',
		fontSize: '0.9em',
		textAlign: 'center',
	}
});

const BurgerHeader = glamorous.div({
	display: 'table',
	width: '100%',
	borderBottom: 'solid 1px #ccc',
	padding: '15px 5px',
	fontSize: '1.4em',

	'@media(max-width: 855px)': {
		display: 'none'
	}

});

const BurgerWrap = glamorous.div({
	marginTop: '30px',
	position: 'relative',
});

const Content = glamorous.div({
	marginBottom: '40px'
})

class Burger extends React.Component{

	constructor(props){
		super(props);
	}

	componentWillMount(){
		this.props.burgerActions.fetchBurgers();
	}

	componentDidMount(){
		window.scrollTo(0, 0);
	}

	renderProducts(){

		const { burgers } = this.props.burgerStore;

		return(
			burgers.map((burger, i) => {
				return (
					<ProductHolder key={ i }>
						<BurgerDescription>
							<ProductTitle>{ burger.name }</ProductTitle>
							<ProductDescription>{ burger.description }</ProductDescription>
						</BurgerDescription>
						<ProductPrice>	
							<PricesInner>
								<p>{ burger.prices[0] }</p>
								<p>{ burger.prices['8oz'] }</p>
								<p>{ burger.prices['12oz'] }</p>
								<p>{ burger.prices['16oz'] }</p>
								<p>{ burger.prices['24oz'] }</p>
							</PricesInner>
						</ProductPrice>
					</ProductHolder>
				)
			})
		)
	}

	render(){

		const title = 'Burger Menu | We Kneed Pizzeria | Southport, Merseyside';
		const img = '/assets/goats-cheese-olive.jpg';
		const description = "We Knead Pizza's burger Menu | A 5 star rated pizzeria in the heart of Southport, Merseyside";
		const url = 'https://www.wekneadpizza.co.uk';
		const keywords = 'we knead pizza, pizzeria, Southport, Merseyside, Italian';

		const meta = {
			title: title,
			canonical: url,
			meta: {
				charset: 'utf-8',
				name: {
					keywords: keywords,
					description: description,
					"twitter:card": "summary",
					"twitter:url": url,
					"twitter:title": title,
					"twitter:description": description,
					"twitter:image": img,
				},
				property: {
					"og:type": "website",
					"og:site_name": `We Knead Pizza`,
					"og:locale": "en_GB",
					"og:url": url,
					"og:description": description,
					"og:title": title,
					"og:image": img,
					"fb:app_id": "",
				}
			}
		};

		return <DocumentMeta {...meta}>
			<Navigation />
			<Header />

			<Wrapper>
				<WrapperInner>
					<Content>
						<Title title='We Knead Pizzeria Burger Menu' />
						<p>All our burgers are home made using fresh local ingredients. We take the patty, grill it until it is nicely browned, and top it with your selected toppings. All burgers come topped with gem lettuce, onions, tomato and are served on a soft brioche bun. All burgers come with chips and your choice of sauce.</p>
					</Content>

					<BurgerWrap>
						<BurgerHeader>
							<BurgerDescription />
							<ProductPrice>
								<PricesInner>
									<p>&nbsp;</p>
									<p>8oz</p>
									<p>12oz</p>
									<p>16oz</p>
									<p>24oz</p>
								</PricesInner>
							</ProductPrice>
						</BurgerHeader>
						{ this.renderProducts() }
					</BurgerWrap>

				</WrapperInner>
			</Wrapper>

			

			<Banner 
				title='Open Daily!' 
				content='Open 5PM to 10pm Sunday to Thursday, 5pm to 11pm Friday & Saturday'
				image='/assets/city-background.jpg' />
	
			<TopFooter />
			<BottomFooter />
		</DocumentMeta>
	};
}  

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
	burgerActions: bindActionCreators(burgerActions, dispatch)
});

export default Burger = connect(mapStateToProps, mapDispatchToProps)(Burger);
