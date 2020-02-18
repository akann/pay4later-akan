import { combineReducers } from 'redux';

import merchantReducer from './merchant/reducer';
import merchantsReducer from './merchants/reducer';

export default combineReducers({
  merchant: merchantReducer,
  merchants: merchantsReducer,
});
