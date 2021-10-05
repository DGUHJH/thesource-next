import joinJson from 'assets/json/join.json';
import React, { useEffect } from 'react';
import * as Styled from './styled';

type Props = {
  agreement: boolean[];
  setAgreement: React.Dispatch<React.SetStateAction<boolean[]>>;
};

export const Agree: React.FC<Props> = ({ agreement, setAgreement }) => {
  const onCheckboxChange = (id: number) => () => {
    if (id === 3) {
      if (agreement[0] && agreement[1] && agreement[2]) {
        setAgreement((prev) => prev.map((value) => (value ? !value : value)));
      } else {
        setAgreement((prev) => prev.map((value) => (value ? value : !value)));
      }
    } else {
      setAgreement((prev) =>
        prev.map((value, index) => (index === id ? !value : value))
      );
    }
  };

  useEffect(() => {}, [agreement]);

  return (
    <Styled.Root>
      <Styled.TitleTypo>약관동의</Styled.TitleTypo>
      <Styled.AgreeContainer>
        <Styled.AgreeTitleTypo>
          디소스 회원가입 약관에 동의합니다.
        </Styled.AgreeTitleTypo>
        <Styled.AgreeInfoWrapper>
          <Styled.AgreeInfoTypo>{joinJson[0]}</Styled.AgreeInfoTypo>
        </Styled.AgreeInfoWrapper>
        <Styled.AgreeCheckboxContainer>
          <Styled.AgreeCheckboxTypo>동의하기(필수)</Styled.AgreeCheckboxTypo>
          <Styled.AgreeCheckbox
            checked={agreement[0]}
            onChange={onCheckboxChange(0)}
            color="default"
            size="small"
          />
        </Styled.AgreeCheckboxContainer>
        <Styled.AgreeTitleTypo>
          개인정보 수집 및 이용에 대한 안내
        </Styled.AgreeTitleTypo>
        <Styled.AgreeInfoWrapper>
          <Styled.AgreeInfoTypo>{joinJson[1]}</Styled.AgreeInfoTypo>
        </Styled.AgreeInfoWrapper>
        <Styled.AgreeCheckboxContainer>
          <Styled.AgreeCheckboxTypo>동의하기(필수)</Styled.AgreeCheckboxTypo>
          <Styled.AgreeCheckbox
            checked={agreement[1]}
            onChange={onCheckboxChange(1)}
            color="default"
            size="small"
          />
        </Styled.AgreeCheckboxContainer>
        <Styled.AgreeTitleTypo>
          이메일 안내약관 동의 (이벤트 및 공지)
        </Styled.AgreeTitleTypo>
        <Styled.AgreeInfoWrapper>
          <Styled.AgreeInfoTypo>{joinJson[2]}</Styled.AgreeInfoTypo>
        </Styled.AgreeInfoWrapper>
        <Styled.AgreeCheckboxContainer>
          <Styled.AgreeCheckboxTypo>동의하기(선택)</Styled.AgreeCheckboxTypo>
          <Styled.AgreeCheckbox
            checked={agreement[2]}
            onChange={onCheckboxChange(2)}
            color="default"
            size="small"
          />
        </Styled.AgreeCheckboxContainer>
      </Styled.AgreeContainer>
      <Styled.AllAgreeContainer>
        <Styled.AllAgreeTypo>전체 동의하기</Styled.AllAgreeTypo>
        <Styled.AgreeCheckbox
          checked={agreement[0] && agreement[1] && agreement[2]}
          onChange={onCheckboxChange(3)}
          color="default"
          size="small"
        />
      </Styled.AllAgreeContainer>
    </Styled.Root>
  );
};
