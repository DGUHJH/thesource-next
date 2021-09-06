import { Box, Typography } from '@material-ui/core';
import styled from 'styled-components';

export const Root = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const NewContentContainer = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 60px;
  box-sizing: border-box;
`;

export const NewContentTitleWrapper = styled(Box)``;

export const NewContentTitleTypo = styled(Typography)`
  &&& {
    font-family: Roboto;
    font-size: 30px;
    color: black;
  }
`;

export const NewContentTitleTypoBold = styled.span`
  font-weight: 800;
`;

export const NewContentTitleTypoLight = styled.span`
  font-weight: 300;
`;

export const NewContentListContainer = styled(Box)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 80px 0;
`;

export const NewContentListSample = styled(Box)`
  &&& {
    width: 435px;
    height: 425px;
    border-radius: 4px;
    background: #0003;
    margin-right: 30px;
    box-sizing: initial;
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
