import { Box, Container, Typography } from '@material-ui/core';
import styled from 'styled-components';

export const Root = styled(Box)`
  width: 100%;
`;

export const BodyContainer = styled(Container)`
  &&& {
    width: 100%;
    display: flex;
    padding: 0;
  }
`;

export const LeftContainer = styled(Box)`
  width: 210px;
`;

export const RightContainer = styled(Box)`
  width: 909px;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-left: 40px;
  margin-bottom: 80px;
`;

export const TitleTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Bold;
    font-size: 24px;
    color: #4b4b4b;
  }
`;

export const Bar = styled(Box)`
  width: 100%;
  height: 1px;
  background: #e9e9e9;
  margin: 40px 0;
`;

export const Youtube = styled(Box)`
  width: 909px;
  height: 512px;
  background: #c4c4c4;
`;
