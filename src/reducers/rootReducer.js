import { combineReducers } from 'redux';

import pizzaStore from './pizzaStore';
import sidesStore from './sidesStore';
import burgerStore from './burgerStore';

export default combineReducers({
  PizzaStore: pizzaStore,
  sidesStore: sidesStore,
  burgerStore: burgerStore,
});