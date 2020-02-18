import { fetchMerchantSuccess } from './actions';

import reducer from './reducer';

describe('Merchant/Reducer', () => {
  it('should return default', () => {
    const state = { other: 'test1' };

    expect(reducer(state, { type: 'RANDOM' })).toEqual(state);
  });

  it('should reduce fetchMerchantSuccess', () => {
    const state = {};
    const data = {
      merchant_id: 'A1204',
    };

    expect(reducer(state, fetchMerchantSuccess(data))).toEqual({ data: { merchant_id: 'A1204' }, pending: false });
  });
});
