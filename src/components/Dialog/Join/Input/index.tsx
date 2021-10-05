import React, { useEffect } from 'react';
import * as Styled from './styled';

type EditorDataType = {
  email: string;
  password: string;
  passwordConfirm: string;
};

type Props = {
  editorData: EditorDataType;
  setEditorData: React.Dispatch<React.SetStateAction<EditorDataType>>;
};

export const Input: React.FC<Props> = ({ editorData, setEditorData }) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditorData({
      ...editorData,
      [e.target.id]: e.target.value,
    });
  };

  useEffect(() => {}, [editorData]);

  return (
    <Styled.Root>
      <Styled.TitleTypo>회원가입</Styled.TitleTypo>
      <Styled.Editor
        id="email"
        value={editorData.email}
        onChange={onChange}
        variant="outlined"
        placeholder="사용할 이메일을 입력해 주세요."
      />
      <Styled.Editor
        id="password"
        type="password"
        value={editorData.password}
        onChange={onChange}
        variant="outlined"
        placeholder="비밀번호를 입력해 주세요."
      />
      <Styled.Editor
        id="passwordConfirm"
        type="password"
        value={editorData.passwordConfirm}
        onChange={onChange}
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
