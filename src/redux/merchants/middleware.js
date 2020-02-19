import { fetchMerchantsError, fetchMerchantsPending, fetchMerchantsSuccess, FETCH_MERCHANTS } from './actions';

export default fetcher => ({ dispatch, getState }) => next => action => {
  if (action.type === FETCH_MERCHANTS) {
    dispatch(fetchMerchantsPending());

    return fetcher('http://interview.dekopay.com.s3.eu-west-2.amazonaws.com/merchants.json')
      .then(data => {
        dispatch(fetchMerchantsSuccess(data));
      })
      .catch(err => {
        dispatch(fetchMerchantsError(err.message));
      });
  }

  return next(action);
};
