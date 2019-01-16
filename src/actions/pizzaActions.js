export const FETCHING_PIZZAS = 'FETCHING_PIZZAS';
export const FETCHING_PIZZAS_FAILED = 'FETCHING_PIZZAS_FAILED';
export const FETCHING_PIZZAS_SUCCESS = 'FETCHING_PIZZAS_SUCCESS';


//get pizzas actions
const fetchingPizzas = () => ({
	type: FETCHING_PIZZAS,
});
  
const fetchingPizzasFailed = error => ({
	type: FETCHING_PIZZAS_FAILED,
	error,
});
  
const fetchingPizzasSuccess = results => ({
	type: FETCHING_PIZZAS_SUCCESS,
	results,
});

export function fetchPizzas(safename){
	return (dispatch) => {
  
	  dispatch(fetchingPizzas());
  
	  return fetch('products.json', { method: 'get' })
		.then(response => response.json())
		.then((json) => {
			const { pizzas } = json;
			dispatch(fetchingPizzasSuccess(pizzas));
		})
		.catch(() => dispatch(fetchingPizzasFailed('Failed fetching pizzas')));
	};
}

