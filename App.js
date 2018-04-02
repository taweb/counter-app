import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store';

import Counter from './containers/Counter';

const ReduxApp = () => (
	<Provider store={store}>
	    <Counter />
    </Provider>
); 

export default ReduxApp; 