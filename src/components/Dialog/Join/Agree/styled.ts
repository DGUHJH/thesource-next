import { Box, Checkbox, Typography } from '@material-ui/core';
import styled from 'styled-components';

export const Root = styled(Box)`
  width: 360px;
`;

export const TitleTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Medium;
    font-size: 24px;
    color: #555;
    margin-top: 20px;
  }
`;

export const AgreeContainer = styled(Box)`
  width: 100%;
  background: #f6f6f6;
  border-radius: 4px;
  margin-top: 20px;
  padding: 10px 25px;
  box-sizing: border-box;
`;

export const AgreeTitleTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Medium;
    font-size: 13px;
    color: #777;
  }
`;

export const AgreeInfoWrapper = styled(Box)`
  width: 100%;
  height: 70px;
  background: white;
  margin-top: 8px;
  padding: 4px;
  box-sizing: border-box;
  overflow-y: scroll;
`;

export const AgreeInfoTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Regular;
    font-size: 8px;
    color: #777;
  }
`;

export const AgreeCheckboxContainer = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 5px;
`;

export const AgreeCheckboxTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Regular;
    font-size: 11px;
    color: #777;
  }
`;

export const AgreeCheckbox = styled(Checkbox)`
  &&& {
    font-size: 8px;
  }
`;

export const AllAgreeContainer = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
  padding-right: 20px;
  box-sizing: border-box;
`;

export const AllAgreeTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Medium;
    font-size: 14px;
    color: #777;
  }
`;
