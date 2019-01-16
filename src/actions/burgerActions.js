export const FETCHING_BURGERS = 'FETCHING_BURGERS';
export const FETCHING_BURGERS_FAILED = 'FETCHING_BURGERS_FAILED';
export const FETCHING_BURGERS_SUCCESS = 'FETCHING_BURGERS_SUCCESS';


//get Burgers actions
const fetchingBurgers = () => ({
	type: FETCHING_BURGERS,
});
  
const fetchingBurgersFailed = error => ({
	type: FETCHING_BURGERS_FAILED,
	error,
});
  
const fetchingBurgersSuccess = results => ({
	type: FETCHING_BURGERS_SUCCESS,
	results,
});

export function fetchBurgers(){
	return (dispatch) => {
  
	  dispatch(fetchingBurgers());
  
	  return fetch('products.json', { method: 'get' })
		.then(response => response.json())
		.then((json) => {
			const { burgers } = json;
			dispatch(fetchingBurgersSuccess(burgers));
		})
		.catch(() => dispatch(fetchingBurgersFailed('Failed fetching Burgers')));
	};
}

