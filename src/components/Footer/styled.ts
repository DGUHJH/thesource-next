import { Box, Typography } from '@material-ui/core';
import styled from 'styled-components';

export const Root = styled(Box)`
  width: 100%;
  height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MenuContainer = styled(Box)`
  width: 100%;
  height: 52px;
  border-top: 1px #cecece solid;
  display: flex;
  align-items: center;
  padding-left: 60px;
  box-sizing: border-box;
`;

export const MenuTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Regular;
    font-size: 14px;
    color: #868686;
    margin-right: 60px;
    cursor: pointer;
  }
`;

export const InfoContainer = styled(Box)`
  width: 100%;
  height: 166px;
  border-top: 1px #cecece solid;
  padding-top: 30px;
  padding-left: 60px;
  box-sizing: border-box;
`;

export const InfoTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Regular;
    font-size: 11px;
    color: #868686;
  }
`;
