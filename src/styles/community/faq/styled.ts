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

export const FAQContainer = styled(Box)`
  width: 909px;
  display: flex;
  flex-direction: column;
`;

export const FAQTitleTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Medium;
    font-size: 16px;
    color: #4b4b4b;
  }
`;

export const FAQBodyContainer = styled(Box)`
  width: 909px;
  display: flex;
  flex-direction: column;
  border-top: 1px #444 solid;
  margin-top: 20px;
  margin-bottom: 40px;
`;

export const FAQBodyTitleTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Medium;
    font-size: 13px;
    color: #555;
  }
`;

export const FAQBodyContentTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Regular;
    font-size: 12px;
    color: #666;
    padding: 0 13px;
    box-sizing: border-box;
    word-break: keep-all;
    margin-bottom: 10px;
  }
`;

export const FAQBodyContentTypoPoint = styled.span`
  &&& {
    font-family: NotoSans-Medium;
  }
`;
