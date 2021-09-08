import { Box, Button, Typography } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import styled from 'styled-components';

export const Root = styled(Box)`
  width: 440px;
  padding: 40px;
  box-sizing: border-box;
  position: relative;
`;

export const CloseButton = styled(Close)`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 4px;
  cursor: pointer;
`;

export const SubmitButton = styled(Button)`
  &&& {
    width: 360px;
    height: 58px;
    background: #4ea5fc;
    margin-top: 20px;
  }
`;

export const SubmitButtonTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Bold;
    font-size: 16px;
    color: #fff;
  }
`;
