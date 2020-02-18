import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import MerchantContainer from './MerchantContainer';

describe('<MerchantContainer />', () => {
  it('should contain complete elements', () => {
    const mockStore = {
      merchant: {
        data: {
          name: 'Carroll - Lang Grocery',
          merchant_id: 'A1202',
          pricing: {
            subsidy: 7,
            discount_subsidy: 6,
            discount_cutoff: 1100,
          },
          transactions: [
            {
              description: 'Soft Chips',
              date: '2019-02-26T23:13:10.116Z',
              price: 2923,
            },
            {
              description: 'Awesome Frozen Chips',
              date: '2019-03-01T01:50:59.653Z',
              price: 1958,
            },
          ],
        },
      },
    };
    const wrapper = shallow(<MerchantContainer store={configureStore()(mockStore)} />);
    expect(wrapper).toBeDefined();

    expect(wrapper.children().props().merchant).toEqual({
      id: 'A1202',
      name: 'Carroll - Lang Grocery',
      subsidyTotal: 292.86,
      transactionsCount: 2,
      transactionsPriceTotal: 4881,
      transactions: [
        {
          date: '2019-03-01 01:50',
          description: 'Awesome Frozen Chips',
          price: 1958,
          subsidy: 117.47999999999999,
        },
        {
          date: '2019-02-26 23:13',
          description: 'Soft Chips',
          price: 2923,
          subsidy: 175.38,
        },
      ],
    });
  });
});
