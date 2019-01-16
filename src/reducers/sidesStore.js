import {
    FETCHING_SIDES,
    FETCHING_SIDES_FAILED,
    FETCHING_SIDES_SUCCESS
} from '../actions/sidesActions';
  
export const initialState = {
	sides: {},
	isFetchingSides: false,
	hasFetchedSides: false,
	errorMessage: ''
};
  
export default function SideStore(state = initialState, action) {
	switch (action.type) {
		case FETCHING_SIDES:
			return { 
				...state, 
				isFetchingSides: true 
			};
		case FETCHING_SIDES_FAILED:
			return { 
				...state, 
				isFetchingSides: false,
				errorMessage: action.error
			};
		case FETCHING_SIDES_SUCCESS:
			return { 
				...state, 
				isFetchingSides: false,
				hasFetchedSides: true,
				errorMessage: '',
				sides: action.results
			};
	    default: 
			return { ...state };
  
	}
}
  