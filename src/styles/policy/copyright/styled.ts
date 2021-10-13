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
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
`;

export const TitleTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Bold;
    font-size: 24px;
    color: #4b4b4b;
    margin-top: 40px;
  }
`;

export const TitleBar = styled(Box)`
  width: 970px;
  height: 1px;
  background: #e9e9e9;
  margin-top: 40px;
`;

export const ContentContainer = styled(Box)`
  width: 970px;
  display: flex;
  flex-direction: column;
`;

export const ContentTitleTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Bold;
    font-size: 18px;
    color: #4ea5fc;
    margin-top: 50px;
  }
`;

export const ContentBodyTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Light;
    font-size: 16px;
    color: #555;
    margin-top: 10px;
  }
`;

export const ContentLogoTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Medium;
    font-size: 16px;
    color: #555;
    margin-top: 50px;
  }
`;

export const ContentLogoTypoPoint = styled.span`
  &&& {
    font-family: NotoSans-Bold;
    color: #4ea5fc;
  }
`;
