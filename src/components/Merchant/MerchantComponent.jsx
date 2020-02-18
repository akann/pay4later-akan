import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Transactions from './Transactions';

const StyledWrapperDiv = styled.div`
  margin-left: 50px;
  margin-bottom: 100%;
`;

const MerchantComponent = ({ merchant }) => {
  const { name, subsidyTotal, transactionsCount, transactionsPriceTotal, transactions } = merchant;

  return (
    <StyledWrapperDiv>
      <Header
        name={name}
        subsidyTotal={subsidyTotal}
        transactionsCount={transactionsCount}
        transactionsPriceTotal={transactionsPriceTotal}
      />
      <Transactions transactions={transactions} />
    </StyledWrapperDiv>
  );
};

export default MerchantComponent;
