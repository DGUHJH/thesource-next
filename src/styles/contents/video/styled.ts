import { Box } from '@material-ui/core';
import styled from 'styled-components';

export const Root = styled(Box)``;

export const BodyContainer = styled(Box)`
  width: 100%;
  display: flex;
`;

export const LeftContainer = styled(Box)`
  width: 244px;
  padding: 40px 20px;
  box-sizing: border-box;
`;

export const RightContainer = styled(Box)`
  width: calc(100% - 244px);
  display: flex;
  flex-wrap: wrap;
  padding-top: 150px;
`;

export const ContentsCardWrapper = styled(Box)`
  margin-bottom: 30px;
`;
