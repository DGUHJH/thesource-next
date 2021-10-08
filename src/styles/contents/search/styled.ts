import { Box, Typography } from '@material-ui/core';
import styled from 'styled-components';

export const Root = styled(Box)`
  width: 100%;
`;

export const SearchInfoContainer = styled(Box)`
  width: 100%;
  height: 120px;
  padding: 12px 60px;
  box-sizing: border-box;
  background: #e9e9e9;
`;

export const SearchInfoMenuContainer = styled(Box)`
  width: 100%;
  display: flex;
  margin-top: 12px;
  align-items: center;
`;

export const SearchInfoMenuTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Regular;
    font-size: 18px;
    color: #4b4b4b;
  }
`;

export const SearchInfoMenuNumberTypoPoint = styled.span`
  &&& {
    font-family: Roboto;
    font-size: 18px;
    color: #4ea5fc;
    margin-left: 20px;
    margin-top: 5px;
  }
`;

export const SearchInfoMenuTypoPoint = styled.span`
  &&& {
    font-size: 18px;
    color: #4ea5fc;
    margin-top: 2px;
    margin-left: 3px;
  }
`;

export const SearchInfoChip = styled(Box)`
  background: #fff;
  border-radius: 30px;
  border: 1px #e9e9e9 solid;
  padding: 10px 20px;
  margin-right: 7px;
`;

export const SearchInfoChipTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Light;
    font-size: 14px;
    color: #444;
  }
`;

export const Container = styled(Box)`
  width: 100%;
  padding: 0 60px;
  box-sizing: border-box;
  margin-top: 90px;
  display: flex;
  flex-direction: column;
`;

export const CategoryContainer = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const CategoryTypoWrapper = styled(Box)`
  display: flex;
  align-items: center;
`;

export const CategoryPointTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Black;
    font-size: 18px;
    color: #4ea5fc;
    cursor: pointer;
  }
`;

export const CategoryTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Light;
    font-size: 18px;
    color: #9e9e9e;
    cursor: pointer;
  }
`;

export const CategoryBar = styled(Box)`
  width: 1px;
  height: 10px;
  background: #9e9e9e;
  margin: 0 20px;
`;

export const ContentsContainer = styled(Box)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 35px;
`;

export const ContentsCardWrapper = styled(Box)`
  margin-bottom: 30px;
`;
