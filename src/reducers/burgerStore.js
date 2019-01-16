import {
    FETCHING_BURGERS,
    FETCHING_BURGERS_FAILED,
    FETCHING_BURGERS_SUCCESS
} from '../actions/burgerActions';
  
export const initialState = {
	burgers: [],
	isFetchingBurgers: false,
	hasFetchedBurgers: false,
	errorMessage: ''
};
  
export default function BurgerStore(state = initialState, action) {
	switch (action.type) {
		case FETCHING_BURGERS:
			return { 
				...state, 
				isFetchingBurgers: true 
			};
		case FETCHING_BURGERS_FAILED:
			return { 
				...state, 
				isFetchingBurgers: false,
				errorMessage: action.error
			};
		case FETCHING_BURGERS_SUCCESS:
			return { 
				...state, 
				isFetchingBurgers: false,
				hasFetchedBurgers: true,
				errorMessage: '',
				burgers: action.results
			};
	    default: 
			return { ...state };
  
	}
}
  