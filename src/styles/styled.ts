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
  width: 90px;
  cursor: pointer;
`;

export const IconMenuBarWrapper = styled(Box)`
  width: 110px;
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

export const BestContentContainer = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 60px;
`;

export const BestContentTitleWrapper = styled(Box)`
  padding-left: 60px;
  box-sizing: border-box;
`;

export const BestContentTitleTypo = styled(Typography)`
  &&& {
    font-family: Roboto;
    font-size: 30px;
    color: black;
  }
`;

export const BestContentTitleTypoBold = styled.span`
  font-weight: 800;
`;

export const BestContentTitleTypoLight = styled.span`
  font-weight: 300;
`;

export const BestContentListContainer = styled(Box)`
  &&& {
    width: 100%;
    background: #ededed;
    display: flex;
    flex-wrap: nowrap;
    padding: 20px 0;
    padding-left: 60px;
    box-sizing: border-box;
    margin-top: 20px;
    overflow-x: scroll;
  }
`;

export const BestContentListSample = styled(Box)`
  &&& {
    width: 277px;
    height: 244px;
    border-radius: 4px;
    background: #0003;
    margin-right: 30px;
    box-sizing: initial;
  }
`;
