import React from 'react';

import Loading from '../Loading/Loading';
import ErrorPage from '../ErrorPage/ErrorPage';
import MerchantContainer from '../../containers/Merchant/MerchantContainer';

export default ({ pending, errorMessage }) => {
  if (pending) {
    return <Loading />;
  }

  if (errorMessage) {
    return <ErrorPage msg={errorMessage} />;
  }

  return <MerchantContainer />;
};
