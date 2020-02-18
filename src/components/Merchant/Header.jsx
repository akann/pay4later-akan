import React from 'react';
import styled from 'styled-components';

import ChartComponent from '../Chart/Chart';
import { StyledTitleCss } from '../../styles';

const StyledWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 550px 200px;
`;

const StyledMerchantNameDiv = styled.div`
  grid-column: 1;
  grid-row: 2;
`;

const StyledTitleDiv = styled.div`
  ${StyledTitleCss};
  grid-column: 1;
  grid-row: 1;
`;

const StyledPieChartDiv = styled.div`
  grid-column: 2;
  grid-row: 1 / span 3;
  width: 100px !important;
  display: flex;
  align-items: center;
  margin-left: 160px;
`;

const StyledMerchantSummaryDiv = styled.div`
  grid-column: 1;
  grid-row: 3;
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
`;

const StyledDataDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledDataValueDiv = styled.div`
  ${StyledTitleCss};
`;

const Header = ({ name, subsidyTotal, transactionsCount, transactionsPriceTotal }) => (
  <StyledWrapper>
    <StyledTitleDiv>Transactions</StyledTitleDiv>
    <StyledPieChartDiv>
      <ChartComponent subsidy={subsidyTotal} total={transactionsPriceTotal} />
    </StyledPieChartDiv>
    <StyledMerchantNameDiv>{name}</StyledMerchantNameDiv>
    <StyledMerchantSummaryDiv>
      <StyledDataDiv>
        <div>Count</div>
        <StyledDataValueDiv>{transactionsCount}</StyledDataValueDiv>
      </StyledDataDiv>
      <StyledDataDiv>
        <div>Total</div>
        <StyledDataValueDiv>£{Number(transactionsPriceTotal).toFixed(2)}</StyledDataValueDiv>
      </StyledDataDiv>
      <StyledDataDiv>
        <div>Subsidy</div>
        <StyledDataValueDiv>£{Number(subsidyTotal).toFixed(2)}</StyledDataValueDiv>
      </StyledDataDiv>
    </StyledMerchantSummaryDiv>
  </StyledWrapper>
);

export default Header;
