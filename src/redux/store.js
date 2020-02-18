import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

import merchantMiddleware from './merchant/middleware';
import merchantsMiddleware from './merchants/middleware';

import fetcher from './fetcher';

export default function configureStore() {
  const middlewareEnhancer = applyMiddleware(merchantMiddleware(fetcher), merchantsMiddleware(fetcher));
  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, {}, composedEnhancers);

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer));
  }

  return store;
}
