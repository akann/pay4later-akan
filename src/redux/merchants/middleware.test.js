import configureStore from 'redux-mock-store';

import middleware from './middleware';
import { fetchMerchants, fetchMerchantsError, fetchMerchantsPending, fetchMerchantsSuccess } from './actions';
import { fetchMerchant } from '../merchant/actions';

describe('movie middleware', () => {
  it('should return data on success', () => {
    const fetcherSpy = jest.fn(() =>
      Promise.resolve([
        {
          merchant_id: 'A1204',
          name: 'Bartell, Walter and Koch Toys',
          _links: {
            self: {
              href: '/merchants/A1204.json',
            },
          },
        },
      ])
    );

    const mockStore = configureStore([middleware(fetcherSpy)]);
    const store = mockStore({
      merchants: {},
    });

    return store.dispatch(fetchMerchants()).then(() => {
      expect(store.getActions()).toEqual([
        fetchMerchantsPending(),
        fetchMerchantsSuccess([
          {
            merchant_id: 'A1204',
            name: 'Bartell, Walter and Koch Toys',
            _links: {
              self: {
                href: '/merchants/A1204.json',
              },
            },
          },
        ]),
        fetchMerchant('/merchants/A1204.json'),
      ]);
    });
  });

  it('should return error on error', () => {
    const fetcherSpy = jest.fn(() => Promise.reject(new Error('No way Jose')));

    const mockStore = configureStore([middleware(fetcherSpy)]);
    const store = mockStore({
      merchants: {},
    });

    return store.dispatch(fetchMerchants()).then(() => {
      expect(store.getActions()).toEqual([fetchMerchantsPending(), fetchMerchantsError('No way Jose')]);
    });
  });
});
