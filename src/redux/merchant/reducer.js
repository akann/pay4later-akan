import { FETCH_MERCHANT, FETCH_MERCHANT_PENDING, FETCH_MERCHANT_SUCCESS, FETCH_MERCHANT_ERROR } from './actions';

export default (
  state = {
    pending: null,
    data: { transactions: [] },
    errorMessage: null,
    errorCode: null,
  },
  action
) => {
  switch (action.type) {
    case FETCH_MERCHANT:
      return {
        ...state,
        pending: null,
      };

    case FETCH_MERCHANT_PENDING:
      return {
        ...state,
        pending: true,
      };

    case FETCH_MERCHANT_SUCCESS: {
      return {
        ...state,
        data: action.payload.data,
        pending: false,
      };
    }

    case FETCH_MERCHANT_ERROR:
      return {
        ...state,
        pending: false,
        errorMessage: action.payload.errorMessage,
      };

    default:
      return state;
  }
};
