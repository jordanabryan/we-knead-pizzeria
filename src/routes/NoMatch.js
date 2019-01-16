import React from 'react';
import glamorous from 'glamorous';
import DocumentMeta from 'react-document-meta';
import { Link } from 'react-router-dom';

const dough = require('../assets/dough.jpg');
const ingredients = require('../assets/ingredients.jpg');
const pizza = require('../assets/pizza.jpg');
const tomatoChili = require('../assets/tomato-chili.jpg');
const goatsCheese = require('../assets/goats-cheese-olive.jpg');
const hawaiian = require('../assets/hawaiian.png');
const burger = require('../assets/burger.jpg');
const pizza2 = require('../assets/pizza.jpg');
const pizza3 = require('../assets/pizza3.jpg');
const sides = require('../assets/sides.jpg');
const offers = require('../assets/offers.jpg');

import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Banner from '../components/Banner';
import FactBar from '../components/FactBar';
import TopFooter from '../components/TopFooter';
import BottomFooter from '../components/BottomFooter';

import Title from '../components/Title';
import HoverImage from '../components/HoverImage';

const Wrapper = glamorous.div({
	padding: '60px 10px',
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

const Grid = glamorous.div(props => {
	return{
		display: 'grid',
		gridGap: '10px',
		gridTemplateColumns: `repeat(${props.cols}, 1fr)`,
		marginTop: '10px',

		'@supports not (display: grid)': {
			display: 'flex',
			flexWrap: 'wrap',
		},

		'@media(max-width:780px)':{
			gridTemplateColumns: 'repeat(1, 1fr)',
		}
	}
})

const GridColumn = glamorous.div(props => {
	return {
		'@supports not (display: grid)': {
			display: 'flex',
			flexWrap: 'wrap',
			padding: '10px',
			width: `calc(100% / ${props.cols})`,
		},		
	}
})

const Content = glamorous.div({
	marginBottom: '20px'
})

class NoMatch extends React.Component{

	constructor(props){
		super(props);
	}

	componentDidMount(){
		window.scrollTo(0, 0);
	}

	render(){
		
		const title = 'Page not found | We Kneed Pizzeria | Southport, Merseyside';
		const img = '/assets/goats-cheese-olive.jpg';
		const description = "Page not found | A 5 star rated pizzeria in the heart of Southport, Merseyside";
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
					<WrapperInner>
						<Content>
							<Title title='Sorry, Page Not found' />
							<p>Bacon ipsum dolor amet porchetta sirloin andouille landjaeger. Flank pig pork tri-tip turducken shoulder kielbasa cow bresaola tenderloin chuck venison kevin tail. Landjaeger tri-tip salami short loin, tail spare ribs fatback hamburger t-bone shankle sausage. Biltong short ribs ham hock sirloin kevin.</p>
							<p>Bacon ipsum dolor amet porchetta sirloin andouille landjaeger. Flank pig pork tri-tip turducken shoulder kielbasa cow bresaola tenderloin chuck venison kevin tail. Landjaeger tri-tip salami short loin, tail spare ribs fatback hamburger t-bone shankle sausage. Biltong short ribs ham hock sirloin kevin.</p>
						</Content>

						<Grid cols='4'>
							<GridColumn cols='4'>
								<Link to='/burger-menu'>
									<HoverImage 
										src={ burger }
										title='Our Burgers'
										content='Our Burgers' />
								</Link>
							</GridColumn>
							<GridColumn cols='4'>
								<Link to='/pizza-menu'>
									<HoverImage 
										src={ pizza2 }
										title='pizza'
										content='Our Pizzas' />
								</Link>
							</GridColumn>
							<GridColumn cols='4'>
								<Link to='/sides-menu'>
									<HoverImage 
										src={ sides }
										title='sides'
										content='Our Sides' />
								</Link>
							</GridColumn>
							<GridColumn cols='4'>
								<Link to='/special-offers'>
									<HoverImage 
										src={ offers }
										title='offers'
										content='Our offers' />
								</Link>
							</GridColumn>
						</Grid>
					</WrapperInner>
				</Wrapper>

				<Banner 
					title='Free Delivery!' 
					content='Free delivery avaliable from 5PM' 
					image='/assets/delivery.jpg' />

				<TopFooter />
				<BottomFooter />
			</DocumentMeta>
		);
	};
}  

export default NoMatch;
