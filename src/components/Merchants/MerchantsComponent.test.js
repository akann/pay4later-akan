import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import MerchantsComponent from './MerchantsComponent';

let merchants;

describe('MerchantsComponent', () => {
  beforeEach(() => {
    merchants = [
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
    ];
  });

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MerchantsComponent merchants={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should return correct length of merchants', () => {
    const wrapper = mount(<MerchantsComponent merchants={merchants} />);
    expect(wrapper.find('li').length).toBe(3);
  });

  it('should return correct merchants names', () => {
    const wrapper = mount(<MerchantsComponent merchants={merchants} />);
    const lis = wrapper.find('li');

    expect(
      lis
        .at(0)
        .find('span')
        .text()
    ).toEqual('Carroll - Lang Grocery');
    expect(
      lis
        .at(1)
        .find('span')
        .text()
    ).toEqual('Rohan LLC Shoes');
    expect(
      lis
        .at(2)
        .find('span')
        .text()
    ).toEqual('Runolfsdottir Group Health');
  });

  it('should "loadMerchant" on merchant name click', () => {
    const loadMerchantSpy = jest.fn();

    const wrapper = mount(
      <MerchantsComponent loadMerchant={loadMerchantSpy} merchants={merchants} merchantId="A1201" />
    );

    const li = wrapper.find('li').at(1);

    expect(loadMerchantSpy).not.toHaveBeenCalled();
    li.simulate('click');
    expect(loadMerchantSpy).toHaveBeenCalledWith('/merchants/A1201.json');
  });
});
