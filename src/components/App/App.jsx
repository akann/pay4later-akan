import React, { useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Loading from '../Loading/Loading';
import ErrorPage from '../ErrorPage/ErrorPage';
import MerchantsContainer from '../../containers/Merchants/MerchantsContainer';
import MerchantLayoutContainer from '../../containers/Merchant/MerchantLayoutContainer';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Scada';
    font-style: normal;
    font-weight: 400;
    src: local('Scada Regular'), local('Scada-Regular'), url(https://fonts.gstatic.com/s/scada/v6/RLpxK5Pv5qumeVJvzTQKbVvu.woff2) format('woff2');
  }
  html, body {
    width: 100%;

  }
  body {
    margin: 30px;
    font-family: "Comic Sans MS", Scada, Arial;
    font-size: 18px;
  }
`;

const StyledLayout = styled.div`
  display: flex;
`;

export default ({ pending, errorCode, errorMessage, loadMerchants }) => {
  useEffect(() => {
    loadMerchants();
  }, [loadMerchants]);

  if (pending) {
    return <Loading />;
  }

  if (errorCode) {
    return <ErrorPage msg={errorMessage} />;
  }

  return (
    <StyledLayout>
      <GlobalStyle />
      <MerchantsContainer />
      <MerchantLayoutContainer />
    </StyledLayout>
  );
};
