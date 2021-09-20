import { Box, Container } from '@material-ui/core';
import styled from 'styled-components';

export const Root = styled(Box)`
  width: 100%;
`;

export const BodyContainer = styled(Container)`
  &&& {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0;
  }
`;

export const LeftContainer = styled(Box)`
  width: 210px;
`;
