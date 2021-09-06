import { Dialog } from '@material-ui/core';
import { ReducerType } from 'features';
import {
  loginDialogClose,
  LoginDialogState,
} from 'features/login/loginDialogSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Styled from './styled';

export const LoginDialog: React.FC = () => {
  const dispatch = useDispatch();

  const loginDialogData = useSelector<ReducerType, LoginDialogState>(
    (state) => state.loginDialog
  );

  const handleClose = () => {
    dispatch(loginDialogClose());
  };

  return (
    <Styled.Root>
      <Dialog open={loginDialogData.open} onClose={handleClose}>
        asdad
      </Dialog>
    </Styled.Root>
  );
};

export const MLoginDialog = () => {
  return <div>2</div>;
};
