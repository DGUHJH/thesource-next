import { Box, Button, TextField, Typography } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import styled from 'styled-components';

export const Root = styled(Box)`
  width: 525px;
  padding: 40px;
  box-sizing: border-box;
  position: relative;
`;

export const TitleTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Medium;
    font-size: 24px;
    color: #555;
  }
`;

export const Editor = styled(TextField)`
  &&& {
    width: 442px;
    height: 52px;
    margin-top: 20px;
  }
`;

export const LoginButton = styled(Button)`
  &&& {
    width: 445px;
    height: 58px;
    background: #4ea5fc;
    margin-top: 20px;
  }
`;

export const LoginButtonTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Bold;
    font-size: 16px;
    color: #fff;
  }
`;

export const FindPasswordTypoWrapper = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const FindPasswordTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Medium;
    font-size: 13px;
    color: #aeaeae;
  }
`;

export const Bar = styled(Box)`
  width: 445px;
  height: 1px;
  background: #e3e3e3;
  margin-top: 30px;
`;

export const JoinTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Medium;
    font-size: 16px;
    color: #4b4b4b;
    margin-top: 15px;
  }
`;

export const JoinTypoBold = styled.span`
  &&& {
    font-family: NotoSans-Bold;
  }
`;

export const JoinButton = styled(Button)`
  &&& {
    width: 445px;
    height: 58px;
    background: #fff;
    border-color: #4ea5fc;
    margin-top: 20px;
  }
`;

export const JoinButtonTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Bold;
    font-size: 16px;
    color: #4ea5fc;
  }
`;

export const CloseButton = styled(Close)`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 4px;
  cursor: pointer;
`;
