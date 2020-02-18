import { fetchMerchantsError, fetchMerchantsPending, fetchMerchantsSuccess, FETCH_MERCHANTS } from './actions';

import { fetchMerchant } from '../merchant/actions';

export default fetcher => ({ dispatch, getState }) => next => action => {
  if (action.type === FETCH_MERCHANTS) {
    dispatch(fetchMerchantsPending());

    return fetcher('http://interview.dekopay.com.s3.eu-west-2.amazonaws.com/merchants.json')
      .then(data => {
        dispatch(fetchMerchantsSuccess(data));
        const sorted = data.sort((a, b) => a.name.localeCompare(b.name));
        // eslint-disable-next-line no-underscore-dangle
        dispatch(fetchMerchant(sorted[0]._links.self.href));
      })
      .catch(err => {
        dispatch(fetchMerchantsError(err.message));
      });
  }

  return next(action);
};
