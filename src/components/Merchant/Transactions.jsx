import React from 'react';

import styled from 'styled-components';
import { Table, Thead, Tr, Th, Tbody, Td } from '@bootstrap-styled/v4';

const StyledTable = styled(Table)`
  border: 3px solid #000 !important;
  margin-top: 20px;
  width: 820px !important;

  th,
  td {
    border-right: 3px solid #000 !important;
  }
`;

const Transactions = ({ transactions }) => (
  <StyledTable striped bordered>
    <Thead>
      <Tr color="info">
        <Th>Description</Th>
        <Th>Date</Th>
        <Th>Price (£)</Th>
        <Th>Subsidy (£)</Th>
      </Tr>
    </Thead>
    <Tbody>
      {transactions.map(({ description, date, price, subsidy }) => (
        <Tr key={`${description}-${date}-${price}-${subsidy}`}>
          <Td>{description}</Td>
          <Td>{date}</Td>
          <Td>{price}</Td>
          <td>{Number(subsidy).toFixed(2)}</td>
        </Tr>
      ))}
    </Tbody>
  </StyledTable>
);
export default Transactions;
