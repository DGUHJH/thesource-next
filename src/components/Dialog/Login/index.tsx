import { Dialog } from '@material-ui/core';
import { loginFetch } from 'api/login/fetch';
import { cookies } from 'api/methods/cookies';
import { ReducerType } from 'features';
import { joinDialogOpen } from 'features/join/joinDialogSlice';
import {
  loginDialogClose,
  LoginDialogState,
} from 'features/login/loginDialogSlice';
import { useRouter } from 'next/dist/client/router';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Styled from './styled';

export const LoginDialog: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onJoinButtonClick = () => {
    dispatch(loginDialogClose());
    dispatch(joinDialogOpen());
  };

  const loginDialogData = useSelector<ReducerType, LoginDialogState>(
    (state) => state.loginDialog
  );

  const handleClose = () => {
    dispatch(loginDialogClose());
  };

  const handleLogin = (value: boolean) => () => {
    if (value) {
      // dispatch(setLogin());
      // router.reload();
      loginFetch({ email, password }).then((res) => {
        if (res.status.type === 'success') {
          cookies.set('access_token', res.data.access_token);
          router.reload();
        } else {
          alert(res.status.message);
        }
      });
    } else {
      // dispatch(setLogout());
      router.reload();
    }
  };

  const onEnterPress: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === 'Enter') {
      handleLogin(true)();
    }
  };

  return (
    <Dialog open={loginDialogData.open} onClose={handleClose}>
      <Styled.Root>
        <Styled.TitleTypo>로그인</Styled.TitleTypo>
        <Styled.Editor
          placeholder="이메일을 입력해주세요."
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyPress={onEnterPress}
        />
        <Styled.Editor
          placeholder="비밀번호를 입력해주세요."
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyPress={onEnterPress}
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
        <Styled.JoinButton variant="outlined" onClick={onJoinButtonClick}>
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
