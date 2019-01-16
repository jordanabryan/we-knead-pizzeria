import React from 'react';
import glamorous from 'glamorous';
import { Link } from 'react-router-dom';
import DocumentMeta from 'react-document-meta';


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
		display: 'flex',
		flexWrap: 'wrap',
	}
})

const GridColumn = glamorous.div(props => {
	return {
		width: `calc(100% / ${props.cols})`,
		padding: '10px',
		height: '200px',
		overflow: 'hidden',

		'@media(max-width:780px)':{
			width: '100%'
		}

	}
})

const Content = glamorous.div({
	marginBottom: '20px'
})


class Home extends React.Component{

	constructor(props){
		super(props);
	}

	componentDidMount(){
		window.scrollTo(0, 0);
	}

	render(){
		
		const title = 'We Kneed Pizzeria | Southport, Merseyside';
		const img = '/assets/goats-cheese-olive.jpg';
		const description = "We Knead Pizza's | A 5 star rated pizzeria in the heart of Southport, Merseyside";
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
							<Title title='Welcome to We Knead Pizzeria' />
							<p>In the heart of Southport, Merseyside lies We Knead Pizza, a small traditional pizzeria which offers delicious and authentic Neapolitan-style pizzas straight to your door.</p>
							<p>We have a wide range of pizzas, sides and drinks to suit every need with the ability to create your own custom pizza with a vast selection of toppings! We guarantee you'll be screaming 'We knead pizza' every time you think of pizza after trying our pies!</p>
						</Content>

						<Grid cols='3'>
							<GridColumn cols='3'>
								<Link to='/pizza-menu'>
									<HoverImage 
										src={ pizza2 }
										title='pizza'
										content='Our Pizzas' />
								</Link>
							</GridColumn>
							<GridColumn cols='3'>
								<Link to='/burger-menu'>
									<HoverImage 
										src={ burger }
										title='Our Burgers'
										content='Our Burgers' />
								</Link>
							</GridColumn>
							<GridColumn cols='3'>
								<Link to='/sides-menu'>
									<HoverImage 
										src={ sides }
										title='sides'
										content='Our Sides' />
								</Link>
							</GridColumn>
						</Grid>
					</WrapperInner>
				</Wrapper>

				<Banner 
					title='Open Daily!' 
					content='Open 5PM to 10pm Sunday to Thursday, 5pm to 11pm Friday & Saturday' 
					image='/assets/city-background.jpg' />
				
				<FactBar />

				<Wrapper>
					<WrapperInner>
						<Content>
							<Title title='About Our Pizzeria' />
							<p>Dedicated to making our authentic pizza, Tony is constantly on the lookout at the local markets at home and in back in his home land for new and exciting ingredients.</p>
							<p>Our pizza bases are made from sourdough which has been fermented for 20 hours and hand shaped. Generously topped with artisan ingredients, they are then blasted in the hand-built Italian wood oven for a mere 90 seconds, resulting in delicious, crusty and slightly charred pizza perfection.</p>
						</Content>

						<Grid cols='3'>
							<GridColumn cols='3'>
								<HoverImage 
									src={ dough }
									title='dough'
									content='homemade dough...' />
							</GridColumn>
							<GridColumn cols='3'>
								<HoverImage 
									src={ ingredients }
									title='ingredients'
									content='...with fresh ingredients...' />
							</GridColumn>
							<GridColumn cols='3'>
								<HoverImage 
									src={ pizza3 }
									title='pizza'
									content='...makes delicious pizza' />
							</GridColumn>
						</Grid>
					</WrapperInner>
				</Wrapper>

				<Banner 
					title='Free Delivery!' 
					content='Free delivery avaliable from 5PM' 
					image='/assets/delivery.jpg' />

				<Wrapper>
					<WrapperInner>
						<Content>
							<Title title='Our Favorites' />
							<p>All our pizzas are amazing but we have a special place in our hearts for our tomato and chili, ham and pineapple and our famous Goats cheese and Olive pizza. Give them a try, we promise you won't be disappointed, and offer a money back guarantee if your not satisfied!</p>
						</Content>
						<Grid cols='3'>
							<GridColumn cols='3'>
								<HoverImage 
									src={ tomatoChili }
									title='spicy'
									content='Tomato and Chili' />
							</GridColumn>
							<GridColumn cols='3'>
								<HoverImage 
									src={ hawaiian }
									title='Hawaiian'
									content='Ham and Pineapple' />
							</GridColumn>
							<GridColumn cols='3'>
								<HoverImage 
									src={ goatsCheese }
									title='Greek'
									content='Goats Cheese and Olive' />
							</GridColumn>
						</Grid>
					</WrapperInner>
				</Wrapper>

				<TopFooter />
				<BottomFooter />
			</DocumentMeta>
		);
	};
}  

export default Home;
