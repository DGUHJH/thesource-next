import { Box, Button, Typography } from '@material-ui/core';
import styled from 'styled-components';

export const Root = styled(Box)`
  width: 360px;
  display: flex;
  flex-direction: column;
`;

export const TitleTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Medium;
    font-size: 24px;
    color: #555;
    margin-top: 20px;
  }
`;

export const SendImgContainer = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const SendImgWrapper = styled(Box)`
  width: 98px;
  height: 98px;
  margin-top: 40px;
`;

export const TypoContainer = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SendTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Medium;
    font-size: 16px;
    color: #444;
    margin-top: 40px;
  }
`;

export const CheckTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Medium;
    font-size: 13px;
    color: #777;
    margin-top: 16px;
  }
`;

export const ReSendTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Medium;
    font-size: 11px;
    color: #777;
    margin-top: 20px;
    cursor: pointer;
  }
`;

export const ReSendDecorationTypo = styled.span`
  &&& {
    font-size: 9px;
    color: #4ea5fc;
    text-decoration: underline;
    margin-left: 5px;
  }
`;

export const SubmitButton = styled(Button)`
  &&& {
    width: 360px;
    height: 58px;
    background: #4ea5fc;
    margin-top: 40px;
  }
`;

export const SubmitButtonTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Bold;
    font-size: 16px;
    color: #fff;
  }
`;
