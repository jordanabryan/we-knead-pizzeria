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

import * as pizzaActions from '../actions/pizzaActions';


const Wrapper = glamorous.div({
	padding: '60px 0',
	position: 'relative',

	'@media(max-width: 624px)':{
		padding: '60px 20px',
	}
})

const Inner = glamorous.div({
	maxWidth: '1100px',
	width: '100%',
	margin: '0 auto',
});

const ContentWrap = glamorous.div({
	marginTop: '30px',
	position: 'relative',
});

const ContentHeader = glamorous.div({
	display: 'table',
	width: '100%',
	borderBottom: 'solid 1px #ccc',
	padding: '15px 5px',
	fontSize: '1.4em',

	'@media(max-width: 855px)': {
		display: 'none'
	}

});

const PizzaHolder = glamorous.div({
	display: 'table',
	width: '100%',
	borderBottom: 'solid 1px #ccc',
	padding: '15px 5px 5px 5px',

	'&:nth-child(even)': {
		background: '#fbf7f7',
	},

	'&:last-child': {
		borderBottom: 'none',
	},

	'@media(max-width: 855px)': {
		padding: '15px 5px 25px 5px',
	}

});

const PizzaInfo = glamorous.div({
	display: 'table-cell',
	verticalAlign: 'middle',
	width: '40%',

	'@media(max-width: 855px)': {
		display: 'block',
		marginBottom: '20px',
		width: '100%',
	}
})

const PizzaInfoInner = glamorous.div({
	maxWidth: '1100px',
	width: '100%',
	margin: '0 auto 10px',

	'& p': {
		fontSize: '1em'
	}
})

const ProductPrice = glamorous.div({
	display: 'table-cell',
	verticalAlign: 'middle',
	width: '60%',

	'@media(max-width: 855px)':{
		display: 'block',
		width: '100%',
	}
});

const PizzaPrices = glamorous.div({
	display: 'table-cell',
	verticalAlign: 'middle',
	width: '60%',

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

const PriceWrap = glamorous.p({
	display: 'table-cell',
	verticalAlign: 'middle',
	width: '16%',
	fontSize: '0.9em',
	textAlign: 'center',
})

const Size = glamorous.span({
	display: 'none',

	'@media(min-width: 624px) and (max-widmobileth: 855px)':{
		display: 'block',
		marginBottom: '5px',
	},	

	'@media (max-width: 624px)': {
		display: 'block',
		marginBottom: '5px',
	}
})

const InnerSize = glamorous.span({
	display: 'none',

	'@media(max-width: 855px)': {
		display: 'none',
	}	
});

const InnerPrice = glamorous.span({
	display: 'block'
})

const PizzaName = glamorous.h4({
	marginBottom: '5px',
	fontSize: '1.2em'
})

const PizzaDescription = glamorous.h4({
	fontSize: '0.9em'
})

const Content = glamorous.div({
	marginBottom: '40px'
})

class Pizza extends React.Component{

	constructor(props){
		super(props);
	}

	componentDidMount(){
		window.scrollTo(0, 0);
	}

	componentWillMount(){
		this.props.pizzaActions.fetchPizzas();
	}

	renderProducts(){

		const { pizzas } = this.props.PizzaStore;

		return(
			pizzas.map((pizza, i) => {
				return (
					<PizzaHolder key={ i }>
						<PizzaInfo>
							<PizzaInfoInner>
								<PizzaName>{ pizza.name }</PizzaName>
								<PizzaDescription>{ pizza.description }</PizzaDescription>
							</PizzaInfoInner>
						</PizzaInfo>
						<ProductPrice>
							<PricesInner>
								<PriceWrap>
									<Size><InnerSize>Small - </InnerSize>10"</Size>
									<InnerPrice>{ pizza.prices.small }</InnerPrice>
								</PriceWrap>
								<PriceWrap>
									<Size><InnerSize>Medium - </InnerSize>12"</Size>
									<InnerPrice>{ pizza.prices.medium }</InnerPrice>
								</PriceWrap>
								<PriceWrap>
									<Size><InnerSize>Large - </InnerSize>14"</Size>
									<InnerPrice>{ pizza.prices.large }</InnerPrice>
								</PriceWrap>
								<PriceWrap>
									<Size><InnerSize>Super - </InnerSize>16"</Size>
									<InnerPrice>{ pizza.prices.super }</InnerPrice>
								</PriceWrap>
								<PriceWrap>
									<Size><InnerSize>Mega - </InnerSize>18"</Size>
									<InnerPrice>{ pizza.prices.mega }</InnerPrice>
								</PriceWrap>
								<PriceWrap>
									<Size><InnerSize>Gigantic - </InnerSize>20"</Size>
									<InnerPrice>{ pizza.prices.gigantic }</InnerPrice>
								</PriceWrap>
							</PricesInner>
						</ProductPrice>
					</PizzaHolder>
				)
			})
		)

	}

	render(){

		const title = 'Pizza Menu | We Kneed Pizzeria | Southport, Merseyside';
		const img = '/assets/goats-cheese-olive.jpg';
		const description = "We Knead Pizza's pizza Menu | A 5 star rated pizzeria in the heart of Southport, Merseyside";
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

		return (
			<DocumentMeta {...meta}>
				<Navigation />
				<Header />

				<Wrapper>
					<Inner>
						
						<Content>
							<Title title='We Knead Pizzeria Pizza Menu' />
							<p>All our pizzas are hand made using fresh homemade sourdough and topped with fresh local artisan ingredients. We cook each pizza in our log fire oven for 90 seconds until crusty and slightly charred. We call this pizza perfection!</p>
						</Content>
						<ContentWrap>
							<ContentHeader>
								<PizzaDescription />
								<PizzaPrices>
									<PricesInner>
										<p>Small <br /> 10"</p>
										<p>Medium <br /> 12"</p>
										<p>Large <br /> 14"</p>
										<p>Super <br /> 16"</p>
										<p>Mega <br /> 18"</p>
										<p>Gigantic <br /> 20"</p>
									</PricesInner>
								</PizzaPrices>
							</ContentHeader>
							{ this.renderProducts() }
						</ContentWrap>
				
					</Inner>
				</Wrapper>

				<Banner 
					title='Open Daily!' 
					content='Open 5PM to 10pm Sunday to Thursday, 5pm to 11pm Friday & Saturday'
					image='/assets/city-background.jpg' />
		
				<TopFooter />
				<BottomFooter />
			</DocumentMeta>
		)
	};
}  


const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    pizzaActions: bindActionCreators(pizzaActions, dispatch),
});
  
export default Pizza = connect(mapStateToProps, mapDispatchToProps)(Pizza);



