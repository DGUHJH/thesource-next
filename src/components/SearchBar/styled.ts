import { Box, Typography } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import styled from 'styled-components';

export const Root = styled(Box)`
  width: 890px;
  height: 59px;
  background: white;
  border-radius: 30px;
  display: flex;
  overflow: hidden;
`;

export const MenuContainer = styled(Box)`
  width: 150px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px #c9c9c9 solid;
`;

export const MenuTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Regular;
    font-size: 16px;
    color: #676767;
  }
`;

export const EditorContainer = styled(Box)`
  width: 640px;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 17px 23px;
  box-sizing: border-box;
`;

export const Editor = styled.input`
  &&& {
    width: 900px;
    font-family: NotoSans-Regular;
    font-size: 16px;
    border: 0;
    ::placeholder {
      color: #c9c9c9;
    }
    :focus {
      outline-width: 0;
      color: #676767;
    }
  }
`;

export const EditorTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Regular;
    font-size: 16px;
    color: #c9c9c9;
  }
`;

export const ButtonContainer = styled(Box)`
  width: 100px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #4ea5fc;
  cursor: pointer;
`;

export const ButtonIcon = styled(Search)`
  font-size: 36px;
  color: white;
`;
