import { Box, Container } from '@material-ui/core';
import styled from 'styled-components';

export const Root = styled(Box)``;

export const Body = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IconMenuBody = styled(Box)`
  width: 100%;
  height: 100px;
`;

export const IconMenuContainer = styled(Container)`
  &&& {
    padding: 0;
    justify-content: space-between;
  }
`;
export const IconMenuLeftContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
`;

export const IconMenuWrapper = styled(Box)`
  width: 76px;
  height: 66px;
`;
