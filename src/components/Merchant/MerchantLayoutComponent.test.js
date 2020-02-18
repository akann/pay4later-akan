import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import MerchantLayoutComponent from './MerchantLayoutComponent';
import Loading from '../Loading/Loading';
import ErrorPage from '../ErrorPage/ErrorPage';
import MerchantContainer from '../../containers/Merchant/MerchantContainer';

const store = configureStore([])({});

describe('MerchantLayoutComponent', () => {
  it('should return <MerchantLayoutComponent /> when no error and not pending', () => {
    const wrapper = shallow(<MerchantLayoutComponent store={store} />);
    expect(wrapper.find(MerchantContainer).length).toBe(1);

    expect(wrapper.find(Loading).length).toBe(0);
    expect(wrapper.find(ErrorPage).length).toBe(0);
  });

  it('should return <Loading /> when pending', () => {
    const wrapper = shallow(<MerchantLayoutComponent pending store={store} />);
    expect(wrapper.find(Loading).length).toBe(1);
    expect(wrapper.find(MerchantContainer).length).toBe(0);
    expect(wrapper.find(ErrorPage).length).toBe(0);
  });

  it('should return <ErrorPage /> when error', () => {
    const wrapper = shallow(<MerchantLayoutComponent errorMessage="sorry" store={store} />);
    expect(wrapper.find(ErrorPage).length).toBe(1);
    expect(wrapper.find(Loading).length).toBe(0);
    expect(wrapper.find(MerchantContainer).length).toBe(0);
  });
});
