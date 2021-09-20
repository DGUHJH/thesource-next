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
  width: 910px;
  margin-left: 40px;
  display: flex;
  flex-direction: column;
`;

export const TitleTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Bold;
    font-size: 24px;
    color: #444;
    margin-top: 40px;
  }
`;

export const TableImgWrapper = styled(Box)`
  width: 909px;
  height: 708px;
  position: relative;
  margin-top: 40px;
  margin-bottom: 80px;
`;
