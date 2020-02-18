import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background-image: url(/loading.gif);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  width: 600px;
  height: 600px;
`;

export default () => <StyledDiv />;
