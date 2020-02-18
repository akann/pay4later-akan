import React from 'react';

import styled from 'styled-components';

import { StyledTitleCss } from '../../styles';

const StyledWrapperDiv = styled.div`
  border-right: 3px solid #000;
  border-radius: 255px 2px 2px 15px/15px 225px 15px 255px;
  width: 350px;
  margin-right: 10px;
  padding-right: 25px;
`;

const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none outside none;
  width: 320px;
`;

const StyledArrowSpan = styled.div`
  margin-left: auto;
  font-size: 24px;
`;

const StyledHeaderDiv = styled.span`
  ${StyledTitleCss};
`;

const StyledLi = styled.li`
  display: flex;
  border-bottom: 2px solid #000;
  border-radius: 255px 2px 225px 3px/15px 225px 15px 255px;
  padding: 12px 0 12px 12px;
  cursor: pointer;
  font-weight: ${p => (p.merchantId && p.merchantId === p.dataId ? 'bold' : 'normal')};
  :hover {
    background-color: #d9edf7;
  }
  :nth-child(1) {
    border-top: 2px solid #000;
  }
`;

const MerchantsComponent = ({ merchants, loadMerchant, merchantId }) => (
  <StyledWrapperDiv>
    <StyledHeaderDiv>Merchants</StyledHeaderDiv>
    <StyledUl>
      {merchants.map(data => (
        <StyledLi onClick={() => loadMerchant(data.link)} key={data.id} merchantId={merchantId} dataId={data.id}>
          <span>{data.name}</span>
          <StyledArrowSpan>&gt;</StyledArrowSpan>
        </StyledLi>
      ))}
    </StyledUl>
  </StyledWrapperDiv>
);

export default MerchantsComponent;
