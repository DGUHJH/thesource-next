import { Box, Typography } from '@material-ui/core';
import styled from 'styled-components';

export const Root = styled(Box)``;

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
