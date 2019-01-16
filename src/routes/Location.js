import React from 'react';
import glamorous from 'glamorous';
import DocumentMeta from 'react-document-meta';


import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Banner from '../components/Banner';
import FactBar from '../components/FactBar';
import TopFooter from '../components/TopFooter';
import BottomFooter from '../components/BottomFooter';

import Title from '../components/Title';
import HoverImage from '../components/HoverImage';
import LocationMap from '../components/LocationMap';


const Wrapper = glamorous.div({
	padding: '60px 10px',
	position: 'relative',

	'@media(max-width: 624px)':{
		padding: '60px 20px'
	}

});

const Inner = glamorous.div({
	maxWidth: '1100px',
	width: '100%',
	margin: '0 auto'
})

const Content = glamorous.div({
	marginBottom: '20px'
})

class Pizza extends React.Component{

	constructor(props){
		super(props);
	}

	componentDidMount(){
		window.scrollTo(0, 0);
	}

	render(){

		const title = 'We Kneed Pizzeria | Location | Southport, Merseyside';
		const img = '/assets/goats-cheese-olive.jpg';
		const description = "Find We Knead Pizza | A 5 star rated pizzeria in the heart of Southport, Merseyside";
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
							<Title title='Find Us' />
							<p>We are based in the heart of Southport, Merseyside, on the famous Lord Street. We offer free delivery on orders over &pound;10 within the surrounding areas (Ainsdale and Tarlton excluded). For orders between &pound;7 and &pound;10 there will be a £1 delivery charge. Orders for delivery only taken after 5pm</p>
						</Content>
						<div>
							<LocationMap />
						</div>
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

export default Pizza;
