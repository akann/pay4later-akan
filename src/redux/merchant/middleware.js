import { fetchMerchantError, fetchMerchantPending, fetchMerchantSuccess, FETCH_MERCHANT } from './actions';

export default fetcher => ({ dispatch, getState }) => next => action => {
  if (action.type === FETCH_MERCHANT) {
    const { link } = action.payload;

    dispatch(fetchMerchantPending());

    return fetcher(`http://interview.dekopay.com.s3.eu-west-2.amazonaws.com${link}`)
      .then(data => {
        dispatch(fetchMerchantSuccess(data));
      })
      .catch(err => {
        dispatch(fetchMerchantError(err.mesage));
      });
  }

  return next(action);
};
