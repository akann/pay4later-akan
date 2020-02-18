import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  border: 2px solid red;
`;

export default ({ msg }) => <StyledDiv>{msg}</StyledDiv>;
