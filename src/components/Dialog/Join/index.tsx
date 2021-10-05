import { Dialog } from '@material-ui/core';
import { joinFetch } from 'api/join/fetch';
import { ReducerType } from 'features';
import {
  joinDialogClose,
  joinDialogNextStep,
  JoinDialogState,
} from 'features/join/joinDialogSlice';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Agree } from './Agree';
import { Email } from './Email';
import { Input } from './Input';
import * as Styled from './styled';

type EditorDataType = {
  email: string;
  password: string;
  passwordConfirm: string;
};

export const JoinDialog: React.FC = () => {
  const dispatch = useDispatch();
  const [agreement, setAgreement] = useState<boolean[]>([false, false, false]);
  const [editorData, setEditorData] = useState<EditorDataType>({
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const joinDialogData = useSelector<ReducerType, JoinDialogState>(
    (state) => state.joinDialog
  );

  const handleClose = () => {
    dispatch(joinDialogClose());
  };

  const handleNextStep = () => {
    if (joinDialogData.step === 0) {
      if (agreement[0] && agreement[1]) {
        setAgreement([false, false, false]);
        dispatch(joinDialogNextStep());
      } else {
        alert('필수 약관에 동의해주세요!');
      }
    } else if (joinDialogData.step === 1) {
      if (!editorData.email) {
        alert('이메일을 입력해주세요.');
      } else if (!editorData.password) {
        alert('비밀번호를 입력해주세요.');
      } else if (!editorData.passwordConfirm) {
        alert('비밀번호 확인을 입력해주세요.');
      } else if (editorData.password !== editorData.passwordConfirm) {
        alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
      } else {
        joinFetch({
          email: editorData.email,
          password: editorData.password,
          marketing: agreement[2],
        }).then((res) => {
          if (res.status.type === 'success') {
            setEditorData({
              email: '',
              password: '',
              passwordConfirm: '',
            });
            dispatch(joinDialogNextStep());
          } else {
            alert(res.status.message);
          }
        });
      }
    }
  };

  return (
    <Dialog open={joinDialogData.open} onClose={handleClose}>
      <Styled.Root>
        {joinDialogData.step === 0 && (
          <Agree agreement={agreement} setAgreement={setAgreement} />
        )}
        {joinDialogData.step === 1 && (
          <Input editorData={editorData} setEditorData={setEditorData} />
        )}
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
