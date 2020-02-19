import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import merchantReducer from './merchant/reducer';
import merchantsReducer from './merchants/reducer';

export default history =>
  combineReducers({
    router: connectRouter(history),
    merchant: merchantReducer,
    merchants: merchantsReducer,
  });
