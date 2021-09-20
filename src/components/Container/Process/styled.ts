import { Box, Typography } from '@material-ui/core';
import { ArrowForwardIosSharp } from '@material-ui/icons';
import styled from 'styled-components';

export const ProcessContainer = styled(Box)`
  width: 100%;
  height: 67px;
  border: 1px #e9e9e9 solid;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ProcessNumberTypo = styled(Typography)`
  &&& {
    font-family: Roboto;
    font-weight: 400;
    font-size: 24px;
    font-style: italic;
    color: #9e9e9e;
    margin-top: 7px;
  }
`;
export const ProcessNumberTypoPoint = styled.span`
  &&& {
    color: #4ea5fc;
  }
`;

export const ProcessTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Medium;
    font-size: 18px;
    color: #9e9e9e;
  }
`;

export const ProcessTypoPoint = styled.span`
  &&& {
    color: #555;
  }
`;

export const ProcessArrow = styled(ArrowForwardIosSharp)`
  &&& {
    font-size: 19px;
    margin: 0 40px;
  }
`;
