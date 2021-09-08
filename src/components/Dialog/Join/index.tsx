import { Dialog } from '@material-ui/core';
import { ReducerType } from 'features';
import {
  joinDialogClose,
  joinDialogNextStep,
  JoinDialogState,
} from 'features/join/joinDialogSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Agree } from './Agree';
import { Email } from './Email';
import { Input } from './Input';
import * as Styled from './styled';

export const JoinDialog: React.FC = () => {
  const dispatch = useDispatch();

  const joinDialogData = useSelector<ReducerType, JoinDialogState>(
    (state) => state.joinDialog
  );

  const handleClose = () => {
    dispatch(joinDialogClose());
  };

  const handleNextStep = () => {
    dispatch(joinDialogNextStep());
  };

  return (
    <Dialog open={joinDialogData.open} onClose={handleClose}>
      <Styled.Root>
        {joinDialogData.step === 0 && <Agree />}
        {joinDialogData.step === 1 && <Input />}
        {joinDialogData.step !== 2 && (
          <Styled.SubmitButton onClick={handleNextStep}>
            <Styled.SubmitButtonTypo>다음</Styled.SubmitButtonTypo>
          </Styled.SubmitButton>
        )}
        {joinDialogData.step === 2 && <Email />}
        <Styled.CloseButton onClick={handleClose} />
      </Styled.Root>
    </Dialog>
  );
};

export const MJoinDialog = () => {
  return <div>2</div>;
};
