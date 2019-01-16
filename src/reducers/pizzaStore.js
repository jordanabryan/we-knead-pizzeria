import {
    FETCHING_PIZZAS,
    FETCHING_PIZZAS_FAILED,
    FETCHING_PIZZAS_SUCCESS
} from '../actions/pizzaActions';
  
export const initialState = {
	pizzas: [],
	isFetchingPizzas: false,
	hasFetchedPizzas: false,
	errorMessage: ''
};
  
export default function PizzaStore(state = initialState, action) {
	switch (action.type) {
		case FETCHING_PIZZAS:
			return { 
				...state, 
				isFetchingPizzas: true 
			};
		case FETCHING_PIZZAS_FAILED:
			return { 
				...state, 
				isFetchingPizzas: false,
				errorMessage: 'fetching Pizzas failed'
			};
		case FETCHING_PIZZAS_SUCCESS:
			return { 
				...state, 
				isFetchingPizzas: false,
				hasFetchedPizzas: true,
				errorMessage: '',
				pizzas: action.results
			};
	    default: 
			return { ...state };
  
	}
}
  