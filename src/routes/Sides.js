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
import Loading from '../components/Loading';

import Title from '../components/Title';
import HoverImage from '../components/HoverImage';

import * as sidesActions from '../actions/sidesActions';

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

const Inner = glamorous.div({
	maxWidth: '1100px',
	width: '100%',
	margin: '0 auto',
});

const Subtitle = glamorous.h5({
	fontSize: '2.4em',
	textAlign: 'center',
	fontFamily: '"Satisfy", cursive',
	textAlign: 'center',
	paddingBottom: '10px',
	margin: '20px 0 10px',

	'&:after':{
		content: "''",
		marginTop: '10px',
		display: 'block',
		width: '100px',
		borderBottom: 'solid 2px #a52727',
		margin: '10px auto',
	}
})

const ChickenWrap = glamorous.div({
	margin: '30px 0',
	padding: '30px 0',
})

const ChickenContainer = glamorous.div({})

const ProductHolder = glamorous.div({
	width: '100%',
	minHeight: '80px',
	borderBottom: 'solid 1px #ccc',
	padding: '15px 10px 25px 10px',

	display: 'grid',
	gridGap: '10px',
	paddingBottom: '10px',
	gridTemplateColumns: 'auto 75px',

	'@supports not (display: grid)': {
		display: 'flex',
		flexWrap: 'wrap',
	},

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

const ProductPrice = glamorous.div({
	display: 'inline-block',
	fontSize: '1.2em',
	fontWeight: 'bold',
	textAlign: 'right',
	paddingRight: '5px',

	'@supports not (display: grid)': {
		display: 'flex',
		flexWrap: 'wrap',
		width: '75px',
	},

});

const ProductContent = glamorous.div({
	'@supports not (display: grid)': {
		display: 'flex',
		flexWrap: 'wrap',
		width: 'calc(100% - 75px)',
	},
});

const ProductDescription = glamorous.p({
	display: 'block',
	paddingTop: '5px',
	fontSize: '1em'
});

//garlic bread
const GarlicBreadWrap = glamorous.div({
	margin: '30px 0',
	padding: '30px 0'
})

const GarlicBreadContainer = glamorous.div({})


//sidewalk
const SlidewalkWrap = glamorous.div({
	margin: '30px 0',
	padding: '30px 0'
})

const SlidewalkContainer = glamorous.div({})


//desserts
const DessertsWrap = glamorous.div({
	margin: '30px 0',
	padding: '30px 0'
})

const DessertsContainer = glamorous.div({})


//drinks
const DrinksWrap = glamorous.div({
	margin: '30px 0',
	padding: '30px 0'
})

const DrinksContainer = glamorous.div({})

const DrinkProduct = glamorous.div({
	width: '100%',
	minHeight: '80px',
	borderBottom: 'solid 1px #ccc',
	padding: '15px 10px 25px 10px',
	display: 'grid',
	gridGap: '0 10px',
	paddingBottom: '10px',
	gridTemplateColumns: 'auto 290px',

	'@supports not (display: grid)': {
		display: 'flex',
		flexWrap: 'wrap',
	},

	'@media(max-width:600px)': {
		gridTemplateColumns: 'auto'
	},

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

const DrinkTitle = glamorous.h3({
	display: 'inline-block',
});

const DrinkPrice = glamorous.div({
	fontSize: '1.2em',
	fontWeight: 'bold',
	textAlign: 'right',
	paddingRight: '5px',
	display: 'grid',
	gridGap: '0 10px',
	paddingBottom: '10px',
	gridTemplateColumns: '90px 90px 90px',

	'@supports not (display: grid)': {
		display: 'flex',
		flexWrap: 'wrap',
		width: '270px',
	},

	'@media(max-width:600px)': {
		fontSize: '1em',
		textAlign: 'left',
		gridTemplateColumns: '32% 32% 32%'
	}

});

const PriceTitle = glamorous.span({
	display: 'block',
	marginBottom: '5px',
});

const DrinkHeader = glamorous.div({
	'@supports not (display: grid)': {
		display: 'flex',
		flexWrap: 'wrap',
		width: 'calc(100% - 240px)',
	},
});

const DrinkDescription = glamorous.p({
	display: 'block',
	paddingTop: '5px',
	fontSize: '1em'
});


//dips
const DipsWrap = glamorous.div({
	margin: '30px 0',
	padding: '30px 0'
})

const DipsContainer = glamorous.div({})

const Content = glamorous.div({
	marginBottom: '20px'
})



class Sides extends React.Component{

	constructor(props){
		super(props);
	}

	componentDidMount(){
		window.scrollTo(0, 0);
	}

	componentWillMount(){
		this.props.sidesActions.fetchSides();
	}	

	renderChicken(){

		const { chicken } = this.props.sidesStore.sides;

		return(
			chicken.map((chicken, i) => {
				return (
					<ProductHolder key={ i }>
						<ProductContent>
							<ProductTitle>{ chicken.title }</ProductTitle>
							<ProductDescription>{ chicken.description }</ProductDescription>
						</ProductContent>
						<ProductPrice>{ chicken.price }</ProductPrice>
					</ProductHolder>
				)
			})
		)

	}

	renderSides(){

		const { sideOrders } = this.props.sidesStore.sides;

		return(
			sideOrders.map((sideOrders, i) => {
				return (
					<ProductHolder key={ i }>
						<ProductContent>
							<ProductTitle>{ sideOrders.title }</ProductTitle>
							<ProductDescription>{ sideOrders.description }</ProductDescription>
						</ProductContent>
						<ProductPrice>{ sideOrders.price }</ProductPrice>
					</ProductHolder>
				)
			})
		)

	}

	renderDesserts(){

		const { desserts } = this.props.sidesStore.sides;

		return(
			desserts.map((desserts, i) => {
				return (
					<ProductHolder key={ i }>
						<ProductContent>
							<ProductTitle>{ desserts.title }</ProductTitle>
							<ProductDescription>{ desserts.description }</ProductDescription>
						</ProductContent>
						<ProductPrice>{ desserts.price }</ProductPrice>
					</ProductHolder>
				)
			})
		)

	}

	renderDrinks(){

		const { drinks } = this.props.sidesStore.sides;

		return(
			drinks.map((drinks, i) => {
				return (
					<DrinkProduct key={ i }>
						<DrinkHeader>
							<DrinkTitle>{ drinks.title }</DrinkTitle>
							<DrinkDescription>{ drinks.description }</DrinkDescription>
						</DrinkHeader>
						<DrinkPrice>
							<div>{ drinks.price['can'] && <div><PriceTitle>can:</PriceTitle> { drinks.price['can'] } </div>}</div>
							<div>{ drinks.price['500ml'] && <div><PriceTitle>500ml:</PriceTitle> { drinks.price['500ml'] } </div>}</div>
							<div>{ drinks.price['1.5ltr'] && <div><PriceTitle>1.5ltr:</PriceTitle> { drinks.price['1.5ltr'] } </div>}</div>
						</DrinkPrice>
					</DrinkProduct>
				)
			})
		)

	}


	renderGarlicBread(){

		const { garlicBread } = this.props.sidesStore.sides;

		return(
			garlicBread.map((side, i) => {
				return (
					<ProductHolder key={ i }>
						<ProductContent>
							<ProductTitle>{ side.title }</ProductTitle>
							<ProductDescription>{ side.description }</ProductDescription>
						</ProductContent>
						<ProductPrice>{ side.price }</ProductPrice>
					</ProductHolder>
				)
			})
		)
		
	}

	render(){
	
		if(Object.keys(this.props.sidesStore.sides).length === 0 && this.props.sidesStore.sides.constructor === Object){
			return <Loading />
		}		

		const title = 'Side Menu | We Kneed Pizzeria | Southport, Merseyside';
		const img = '/assets/goats-cheese-olive.jpg';
		const description = "We Knead Pizza's side Menu | A 5 star rated pizzeria in the heart of Southport, Merseyside";
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
							<Title title='We Knead Pizzeria Side Orders Menu' />
						</Content>

						<ChickenWrap>
							<Subtitle>Chicken</Subtitle>
							<ChickenContainer>{ this.renderChicken() }</ChickenContainer>
						</ChickenWrap>

						<GarlicBreadWrap>
							<Subtitle>Garlic Bread</Subtitle>
							<GarlicBreadContainer>{ this.renderGarlicBread() }</GarlicBreadContainer>
						</GarlicBreadWrap>

						<SlidewalkWrap>
							<Subtitle>Side Orders</Subtitle>
							<SlidewalkContainer>{ this.renderSides() }</SlidewalkContainer>
						</SlidewalkWrap>

						<DessertsWrap>
							<Subtitle>Desserts</Subtitle>
							<DessertsContainer>{ this.renderDesserts() }</DessertsContainer>
						</DessertsWrap>

						<DrinksWrap>
							<Subtitle>Drinks</Subtitle>
							<DrinksContainer>{ this.renderDrinks() }</DrinksContainer>
						</DrinksWrap>

					</Inner>
				</Wrapper>



				<Banner 
					title='Open Daily!' 
					content='Open 5PM to 10pm Sunday to Thursday, 5pm to 11pm Friday & Saturday'
					image='/assets/city-background.jpg' />
		
				<TopFooter />
				<BottomFooter />
			</DocumentMeta>
		);
	};
}  

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
	sidesActions: bindActionCreators(sidesActions, dispatch)
});

export default Sides = connect(mapStateToProps, mapDispatchToProps)(Sides);


