import { merchantDataSelector, merchantStatusSelector } from './selector';

const mockState = {
  merchant: {
    pending: false,
    errorMessage: null,
    errorCode: null,
    data: {
      name: 'Lehner - Borer Tools',
      merchant_id: 'A1212',
      pricing: {
        subsidy: 11,
        discount_subsidy: 9,
        discount_cutoff: 500,
      },
      transactions: [
        {
          description: 'Rustic Hat',
          date: '2019-03-05T02:06:50.559Z',
          price: 2043,
        },
        {
          description: 'Granite Keyboard',
          date: '2019-02-21T23:59:12.051Z',
          price: 128,
        },
        {
          description: 'Small Soft Gloves',
          date: '2019-02-28T13:54:24.761Z',
          price: 1799.13,
        },
      ],
    },
  },
};

describe('merchantSelector', () => {
  it('should select merchant data', () => {
    expect(merchantDataSelector(mockState)).toStrictEqual({
      id: 'A1212',
      name: 'Lehner - Borer Tools',
      subsidyTotal: 359.87170000000003,
      transactionsCount: 3,
      transactionsPriceTotal: 3970.13,
      transactions: [
        {
          date: '2019-02-21 23:59',
          description: 'Granite Keyboard',
          price: 128,
          subsidy: 14.08,
        },
        {
          date: '2019-03-05 02:06',
          description: 'Rustic Hat',
          price: 2043,
          subsidy: 183.87,
        },
        {
          date: '2019-02-28 13:54',
          description: 'Small Soft Gloves',
          price: 1799.13,
          subsidy: 161.92170000000002,
        },
      ],
    });
  });

  it('should select merchant status', () => {
    expect(merchantStatusSelector(mockState)).toStrictEqual({
      pending: false,
      errorCode: null,
      errorMessage: null,
    });
  });
});
