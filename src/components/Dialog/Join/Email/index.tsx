import joinEmailSend from 'assets/images/join_email_send.png';
import { ReducerType } from 'features';
import {
  joinDialogClose,
  JoinDialogState,
} from 'features/join/joinDialogSlice';
import Image from 'next/image';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Styled from './styled';

export const Email = () => {
  const dispatch = useDispatch();

  const joinDialogData = useSelector<ReducerType, JoinDialogState>(
    (state) => state.joinDialog
  );

  const handleClose = () => {
    dispatch(joinDialogClose());
  };
  return (
    <Styled.Root>
      <Styled.TitleTypo>이메일 인증</Styled.TitleTypo>
      <Styled.SendImgContainer>
        <Styled.SendImgWrapper>
          <Image src={joinEmailSend} />
        </Styled.SendImgWrapper>
      </Styled.SendImgContainer>
      <Styled.TypoContainer>
        <Styled.SendTypo>인증 메일이 발송 되었습니다.</Styled.SendTypo>
        <Styled.CheckTypo>
          메일함에서 인증 메일을 확인 해주세요.
        </Styled.CheckTypo>
      </Styled.TypoContainer>

      <Styled.SubmitButton onClick={handleClose}>
        <Styled.SubmitButtonTypo>시작하기</Styled.SubmitButtonTypo>
      </Styled.SubmitButton>
      <Styled.TypoContainer>
        <Styled.ReSendTypo>
          인증 메일을 받지 못하셨나요?
          <Styled.ReSendDecorationTypo>
            인증 메일 재발송
          </Styled.ReSendDecorationTypo>
        </Styled.ReSendTypo>
      </Styled.TypoContainer>
    </Styled.Root>
  );
};
