import { Box, Typography } from '@material-ui/core';
import styled from 'styled-components';

export const Root = styled(Box)`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 60px;
  box-sizing: border-box;
  border-bottom: 1px #ededed solid;
`;

type TypoProps = {
  type?: 'default' | 'small';
};

export const TypoContainer = styled(Box)<TypoProps>`
  width: ${(props) => (props.type !== 'small' ? '100%' : '1280px')};
  display: flex;
`;

export const Typo = styled(Typography)<TypoProps>`
  &&& {
    font-family: NotoSans-Regular;
    font-size: 11px;
    color: #9e9e9e;
  }
`;

export const MRoot = styled(Box)``;
