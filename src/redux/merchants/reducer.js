import { FETCH_MERCHANTS, FETCH_MERCHANTS_PENDING, FETCH_MERCHANTS_SUCCESS, FETCH_MERCHANTS_ERROR } from './actions';

export default (state = { pending: null, data: [], errorMessage: null, errorCode: null }, action) => {
  switch (action.type) {
    case FETCH_MERCHANTS:
      return {
        ...state,
        pending: null,
        errorMessage: null,
      };

    case FETCH_MERCHANTS_PENDING:
      return {
        ...state,
        pending: true,
        errorMessage: null,
      };

    case FETCH_MERCHANTS_SUCCESS: {
      return {
        ...state,
        data: action.payload.data,
        errorMessage: null,
        pending: false,
      };
    }

    case FETCH_MERCHANTS_ERROR:
      return {
        ...state,
        pending: false,
        errorMessage: action.payload.errorMessage,
      };

    default:
      return state;
  }
};
