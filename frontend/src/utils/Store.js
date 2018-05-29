import {applyMiddleware, createStore, compose} from 'redux';
import thunk from 'redux-thunk';

import application from './Reducer';


export default () => {

  return createStore(
    application,
    compose(applyMiddleware(thunk))
  );
};