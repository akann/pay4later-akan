export const FETCH_MERCHANT = 'FETCH_MERCHANT';
export const FETCH_MERCHANT_PENDING = 'FETCH_MERCHANT_PENDING';
export const FETCH_MERCHANT_SUCCESS = 'FETCH_MERCHANT_SUCCESS';
export const FETCH_MERCHANT_ERROR = 'FETCH_MERCHANT_ERROR';

export const fetchMerchant = link => ({
  type: FETCH_MERCHANT,
  payload: {
    link,
  },
});

export const fetchMerchantPending = () => ({
  type: FETCH_MERCHANT_PENDING,
});

export const fetchMerchantSuccess = data => ({
  type: FETCH_MERCHANT_SUCCESS,
  payload: {
    data,
  },
});

export const fetchMerchantError = errorMessage => ({
  type: FETCH_MERCHANT_ERROR,
  payload: {
    errorMessage,
  },
});
