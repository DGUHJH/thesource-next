import React from 'react';
import * as Styled from './styled';

export const Input = () => {
  return (
    <Styled.Root>
      <Styled.TitleTypo>약관동의</Styled.TitleTypo>
      <Styled.Editor
        variant="outlined"
        placeholder="사용할 이메일을 입력해 주세요."
      />
      <Styled.Editor
        variant="outlined"
        placeholder="비밀번호를 입력해 주세요."
      />
      <Styled.Editor
        variant="outlined"
        placeholder="비밀번호를 확인해 주세요."
      />

      <Styled.PasswordRuleTypo>
        ○ 비밀번호는 8~16자의 영문 대소문자, 숫자, 특수문자를 조합하여
        설정해주세요. <br />○ 안전한 계정 사용을 위해 비밀번호는 주기적으로
        변경해 주세요.
      </Styled.PasswordRuleTypo>
    </Styled.Root>
  );
};
