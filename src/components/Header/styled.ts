import { Box, Container, Typography } from '@material-ui/core';
import styled from 'styled-components';

export const Root = styled(Box)`
  width: 100%;
  border-bottom: 1px #ccc solid;
`;

export const MenuContainer = styled(Container)`
  &&& {
    width: 100%;
    height: 57px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
  }
`;

export const LeftContainer = styled(Box)`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const LogoImageWrapper = styled(Box)`
  &&& {
    width: 125px;
    height: 43px;
    cursor: pointer;
  }
`;

export const LeftMenuTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Regular;
    font-size: 16px;
    color: #575757;
    cursor: pointer;
    margin-top: 2px;
    margin-left: 45px;
  }
`;

export const RightContainer = styled(Box)`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const RightMenuTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Regular;
    font-size: 14px;
    color: #5e5e5e;
    cursor: pointer;
  }
`;

export const RightMenuDivBar = styled(Box)`
  width: 1px;
  height: 11px;
  background: #c4c4c4;
  margin: 0 11px;
`;

export const BannerContainer = styled(Box)`
  width: 100%;
  height: 600px;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const BannerWrapper = styled(Box)`
  width: 1920px;
  height: 100%;
`;

export const SearchBarWrapper = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 270px;
`;
