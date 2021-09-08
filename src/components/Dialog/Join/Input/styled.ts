import { Box, TextField, Typography } from '@material-ui/core';
import styled from 'styled-components';

export const Root = styled(Box)`
  width: 360px;
`;

export const TitleTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Medium;
    font-size: 24px;
    color: #555;
    margin-top: 20px;
  }
`;

export const Editor = styled(TextField)`
  &&& {
    width: 360px;
    height: 50px;
    margin-top: 20px;
  }
`;

export const PasswordRuleTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Regualr;
    font-size: 10px;
    color: #9b9b9b;
    margin-top: 12px;
  }
`;
