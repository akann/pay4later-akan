import React, { useEffect } from 'react';

import Loading from '../Loading/Loading';
import ErrorPage from '../ErrorPage/ErrorPage';
import MerchantComponent from './MerchantComponent';

export default ({ status, currentMerchant, merchant, loadMerchant }) => {
  const link = currentMerchant ? currentMerchant.link : '';
  useEffect(() => {
    loadMerchant(link);
  }, [link, loadMerchant]);

  const { pending, errorMessage } = status;

  if (pending || !currentMerchant) {
    return <Loading />;
  }

  if (!(currentMerchant && currentMerchant.link)) {
    return <ErrorPage msg={`No such merchant: "${currentMerchant.id}"`} />;
  }

  if (errorMessage) {
    return <ErrorPage msg={errorMessage} />;
  }

  return <MerchantComponent merchant={merchant} />;
};
