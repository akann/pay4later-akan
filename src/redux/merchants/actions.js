export const FETCH_MERCHANTS = 'FETCH_MERCHANTS';
export const FETCH_MERCHANTS_PENDING = 'FETCH_MERCHANTS_PENDING';
export const FETCH_MERCHANTS_SUCCESS = 'FETCH_MERCHANTS_SUCCESS';
export const FETCH_MERCHANTS_ERROR = 'FETCH_MERCHANTS_ERROR';

export const fetchMerchants = () => ({
  type: FETCH_MERCHANTS,
});

export const fetchMerchantsPending = () => ({
  type: FETCH_MERCHANTS_PENDING,
});

export const fetchMerchantsSuccess = data => ({
  type: FETCH_MERCHANTS_SUCCESS,
  payload: {
    data,
  },
});

export const fetchMerchantsError = errorMessage => ({
  type: FETCH_MERCHANTS_ERROR,
  payload: {
    errorMessage,
  },
});
