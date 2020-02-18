import { merchantsDataSelector, merchantsStatusSelector } from './selector';

const mockState = {
  merchants: {
    pending: false,
    errorMessage: null,
    errorCode: null,
    data: [
      {
        merchant_id: 'A1201',
        name: 'Rohan LLC Shoes',
        _links: {
          self: {
            href: '/merchants/A1201.json',
          },
        },
      },
      {
        merchant_id: 'A1202',
        name: 'Carroll - Lang Grocery',
        _links: {
          self: {
            href: '/merchants/A1202.json',
          },
        },
      },
      {
        merchant_id: 'A1203',
        name: 'Runolfsdottir Group Health',
        _links: {
          self: {
            href: '/merchants/A1203.json',
          },
        },
      },
    ],
  },
};

describe('merchantsSelector', () => {
  it('should select merchants data', () => {
    expect(merchantsDataSelector(mockState)).toStrictEqual([
      {
        id: 'A1202',
        name: 'Carroll - Lang Grocery',
        link: '/merchants/A1202.json',
      },
      {
        id: 'A1201',
        name: 'Rohan LLC Shoes',
        link: '/merchants/A1201.json',
      },
      {
        id: 'A1203',
        name: 'Runolfsdottir Group Health',
        link: '/merchants/A1203.json',
      },
    ]);
  });

  it('should select merchants status', () => {
    expect(merchantsStatusSelector(mockState)).toStrictEqual({
      pending: false,
      errorCode: null,
      errorMessage: null,
    });
  });
});
