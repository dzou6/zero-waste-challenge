import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers'
import { Provider } from 'react-redux';
import { BrowserRouter} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import 'font-awesome/css/font-awesome.min.css'
import { faKey, faBookReader,faHome,faTasks,faUsers  } from '@fortawesome/free-solid-svg-icons';

import { getAllStories, getAllHabits} from './actions/index';
import WebFont from 'webfontloader';
import App from './app';


const middleware = [ thunk ];

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
)

store.dispatch(getAllStories());
store.dispatch(getAllHabits());

WebFont.load({
    google: {
      families: ['M+PLUS+Rounded+1c', 'sans-serif']
    }
  });

library.add(
    faKey, 
    faBookReader,
    faHome,
    faTasks,
    faUsers);

ReactDOM.render(
    <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
