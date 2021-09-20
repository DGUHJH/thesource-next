import { Dialog } from '@material-ui/core';
import { ReducerType } from 'features';
import {
  loginDialogClose,
  LoginDialogState,
} from 'features/login/loginDialogSlice';
import { setLogin } from 'features/login/loginSlice';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Styled from './styled';

export const LoginDialog: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const loginDialogData = useSelector<ReducerType, LoginDialogState>(
    (state) => state.loginDialog
  );

  const handleClose = () => {
    dispatch(loginDialogClose());
  };

  const handleLogin = (value: boolean) => () => {
    if (value) {
      dispatch(setLogin());
      // router.reload();
    } else {
      // dispatch(setLogout());
      router.reload();
    }
  };

  return (
    <Dialog open={loginDialogData.open} onClose={handleClose}>
      <Styled.Root>
        <Styled.TitleTypo>로그인</Styled.TitleTypo>
        <Styled.Editor
          placeholder="이메일을 입력해주세요."
          variant="outlined"
        />
        <Styled.Editor
          placeholder="비밀번호를 입력해주세요."
          variant="outlined"
        />
        <Styled.LoginButton onClick={handleLogin(true)}>
          <Styled.LoginButtonTypo>로그인</Styled.LoginButtonTypo>
        </Styled.LoginButton>
        <Styled.FindPasswordTypoWrapper>
          <Styled.FindPasswordTypo>비밀번호 찾기</Styled.FindPasswordTypo>
        </Styled.FindPasswordTypoWrapper>
        <Styled.Bar />
        <Styled.JoinTypo>
          디소스의{' '}
          <Styled.JoinTypoBold> 다양한 콘텐츠들을 </Styled.JoinTypoBold> <br />
          <Styled.JoinTypoBold>이용</Styled.JoinTypoBold>하고 싶다면?
        </Styled.JoinTypo>
        <Styled.JoinButton variant="outlined">
          <Styled.JoinButtonTypo>회원가입 하기</Styled.JoinButtonTypo>
        </Styled.JoinButton>
        <Styled.CloseButton onClick={handleClose} />
      </Styled.Root>
    </Dialog>
  );
};

export const MLoginDialog = () => {
  return <div>2</div>;
};
