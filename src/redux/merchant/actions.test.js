import {
  fetchMerchant,
  fetchMerchantSuccess,
  fetchMerchantError,
  fetchMerchantPending,
  FETCH_MERCHANT,
  FETCH_MERCHANT_ERROR,
  FETCH_MERCHANT_PENDING,
  FETCH_MERCHANT_SUCCESS,
} from './actions';

describe('merchant actions', () => {
  it('should return valid fetchMerchant', () => {
    expect(fetchMerchant('/link')).toEqual({
      type: FETCH_MERCHANT,
      payload: {
        link: '/link',
      },
    });
  });
  it('should return valid fetchMerchantPending', () => {
    expect(fetchMerchantPending()).toEqual({
      type: FETCH_MERCHANT_PENDING,
    });
  });
  it('should return valid fetchMerchantSuccess', () => {
    expect(fetchMerchantSuccess({ foo: 'bar' })).toEqual({
      type: FETCH_MERCHANT_SUCCESS,
      payload: {
        data: {
          foo: 'bar',
        },
      },
    });
  });
  it('should return valid fetchMerchantError', () => {
    expect(fetchMerchantError('failed')).toEqual({
      type: FETCH_MERCHANT_ERROR,
      payload: {
        errorMessage: 'failed',
      },
    });
  });
});
