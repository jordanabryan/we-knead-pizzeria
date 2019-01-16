import React from 'react';
import glamorous from 'glamorous';
import VisibilitySensor from 'react-visibility-sensor';


const Wrapper = glamorous.div({
	background: '#a52727',
    color: '#fff',
    textAlign: 'center',
    padding: '20px',
    position: 'relative',
})

const WrapperInner = glamorous.div({
	display: 'table',
    width: '100%',
    maxWidth: '1100px',
    width: '100%',
    margin: '0 auto',
})

const Fact = glamorous.div({
	width: '33%',
	padding: '10px',
	display: 'inline-table',
	verticalAlign: 'middle',

	'@media(max-width: 624px)':{
		width: '100%',
		margin: '10px 0'
	}

})

const FactInner = glamorous.div({
	display: 'table-cell',
	verticalAlign: 'middle',
	textAlign: 'center',
})

const NumberContent = glamorous.div({
	fontSize: '2.5em',
    lineHeight: '1.2em',
    fontFamily: "'Satisfy', cursive",
    marginBottom: '5px'
})

const FactContent = glamorous.div({
	fontSize: '1em',
    marginBottom: '5px'
})


class FactBar extends React.Component{
	
	constructor(props){

		super(props);

		let itemsCount = setInterval(this.updateItems.bind(this), 75);
		let deliveriesCount = setInterval(this.updateDeliveries.bind(this), 50);
		let experienceCount = setInterval(this.updateExperience.bind(this), 500);

		this.state = {
			itemsCount: itemsCount,
			deliveriesCount: deliveriesCount,
			experienceCount: experienceCount,
			items: 0,
			deliveries: 0,
			experience: 0
		};
	};

	componentWillUnmount(){
		clearInterval(this.state.itemsCount);
		clearInterval(this.state.deliveriesCount);
		clearInterval(this.state.experienceCount);
	};

	updateItems(){
		if(this.state.items < 138){
			this.setState({ items: this.state.items+1 })
		}
	};

	updateDeliveries(){
		if(this.state.deliveries < 300){
			this.setState({ deliveries: this.state.deliveries+1 })
		}
	};

	updateExperience(){
		if(this.state.experience < 12){
			this.setState({ experience: this.state.experience+1 })
		}
	};


	render(){
		return (
			<VisibilitySensor>
				 {({isVisible}) =>
					 <Wrapper>
						<WrapperInner>
							<Fact>
								<FactInner>
									<NumberContent>{ this.state.items }</NumberContent>
									<FactContent>Menu items</FactContent>
								</FactInner>
							</Fact>
							<Fact>
								<FactInner>
									<NumberContent>{ this.state.deliveries }+</NumberContent>
									<FactContent>Deliverys every day</FactContent>
								</FactInner>
							</Fact>
							<Fact>
								<FactInner>
									<NumberContent>{ this.state.experience }</NumberContent>
									<FactContent>Years experience</FactContent>
								</FactInner>
							</Fact>
						</WrapperInner>
					</Wrapper>
				}
			</VisibilitySensor>

		)
	}

}

export default FactBar;