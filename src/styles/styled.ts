import { Box, Button, Container, Typography } from '@material-ui/core';
import styled from 'styled-components';

export const Root = styled(Box)``;

export const Body = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IconMenuBody = styled(Box)`
  width: 100%;
  height: 100px;
  border-bottom: 1px #e9e9e9 solid;
`;

export const IconMenuContainer = styled(Container)`
  &&& {
    height: 100%;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const IconMenuLeftContainer = styled(Box)`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IconMenuWrapper = styled(Box)`
  width: 76px;
  height: 66px;
  cursor: pointer;
`;

export const IconMenuBarWrapper = styled(Box)`
  width: 61px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
`;

export const IconMenuBar = styled(Box)`
  width: 1px;
  height: 22px;
  background: #e9e9e9;
`;

export const IconMenuRightContainer = styled(Box)`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const IconMenuRightJoinButton = styled(Button)`
  &&& {
    width: 195px;
    height: 40px;
    background: white;
    border-color: #4ea5fc;
    border-radius: 0;
  }
`;

export const IconMenuRightJoinButtonTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Medium;
    font-size: 12px;
    color: #4ea5fc;
  }
`;

export const LicenseContainer = styled(Box)`
  width: 100%;
  height: 216px;
  display: flex;
  justify-content: center;
  margin: 10px 0;
`;

export const LicenseImgWrapper = styled(Box)`
  width: 1800px;
  height: 100%;
  cursor: pointer;
`;
