import { merchantsDataSelector, merchantsStatusSelector, currentMerchantSelector } from './selector';

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

  it('should select first merchant if no merchant id in path', () => {
    const state = {
      ...mockState,
      router: {
        location: {
          pathname: '/',
        },
      },
    };

    expect(currentMerchantSelector(state)).toEqual({
      id: 'A1202',
      link: '/merchants/A1202.json',
      name: 'Carroll - Lang Grocery',
    });
  });

  it('should select first merchant if valid merchant id in path', () => {
    const state = {
      ...mockState,
      router: {
        location: {
          pathname: '/a1203',
        },
      },
    };

    expect(currentMerchantSelector(state)).toEqual({
      id: 'A1203',
      link: '/merchants/A1203.json',
      name: 'Runolfsdottir Group Health',
    });
  });
  it('should select first merchant if invalid merchant id in path', () => {
    const state = {
      ...mockState,
      router: {
        location: {
          pathname: '/x1203',
        },
      },
    };

    expect(currentMerchantSelector(state)).toEqual({ id: 'x1203'});
  });
});
