export const FETCHING_SIDES = 'FETCHING_SIDES';
export const FETCHING_SIDES_FAILED = 'FETCHING_SIDES_FAILED';
export const FETCHING_SIDES_SUCCESS = 'FETCHING_SIDES_SUCCESS';


//get Sides actions
const fetchingSides = () => ({
	type: FETCHING_SIDES,
});
  
const fetchingSidesFailed = error => ({
	type: FETCHING_SIDES_FAILED,
	error,
});
  
const fetchingSidesSuccess = results => ({
	type: FETCHING_SIDES_SUCCESS,
	results,
});

export function fetchSides(){
	return (dispatch) => {
  
  	  dispatch(fetchingSides());
  
  	  return fetch('products.json', { method: 'get' })
		.then(response => response.json())
		.then((json) => {
			const { sides } = json;
			dispatch(fetchingSidesSuccess(sides));
		})
		.catch(() => dispatch(fetchingSidesFailed('Failed fetching Sides')));
	};
}

