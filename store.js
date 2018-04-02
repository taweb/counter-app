import initialState from './InitialState';
import {createStore} from 'redux';
import reducer from './reducer';

const store = createStore(reducer, initialState);

export {
	store 
}; 