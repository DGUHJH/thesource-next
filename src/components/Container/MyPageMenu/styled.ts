import { Box, Typography } from '@material-ui/core';
import styled from 'styled-components';

export const Root = styled(Box)`
  width: 210px;
  padding: 45px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border: 1px #999 solid;
`;

export const TitleTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Medium;
    font-size: 18px;
    color: #444;
  }
`;

export const MenuTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Regular;
    font-size: 12px;
    color: #444;
    cursor: pointer;
    margin-top: 5px;
  }
`;
