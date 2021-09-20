import React from 'react';
import * as Styled from './styled';

type Props = {
  step: number;
};

export const ProcessContainer: React.FC<Props> = ({ step }) => {
  return (
    <Styled.ProcessContainer>
      {step === 0 && (
        <>
          <Styled.ProcessNumberTypo>
            <Styled.ProcessNumberTypoPoint>01</Styled.ProcessNumberTypoPoint>
          </Styled.ProcessNumberTypo>
          &nbsp; &nbsp;
          <Styled.ProcessTypo>
            <Styled.ProcessTypoPoint>장바구니</Styled.ProcessTypoPoint>
          </Styled.ProcessTypo>
          <Styled.ProcessArrow style={{ color: '#555' }} />
          <Styled.ProcessNumberTypo>02</Styled.ProcessNumberTypo>
          &nbsp; &nbsp;
          <Styled.ProcessTypo>주문/결제</Styled.ProcessTypo>
          <Styled.ProcessArrow style={{ color: '#9e9e9e' }} />
          <Styled.ProcessNumberTypo>03</Styled.ProcessNumberTypo>
          &nbsp; &nbsp;
          <Styled.ProcessTypo>결제 완료</Styled.ProcessTypo>
        </>
      )}
      {step === 1 && (
        <>
          <Styled.ProcessNumberTypo>01</Styled.ProcessNumberTypo>
          &nbsp; &nbsp;
          <Styled.ProcessTypo>
            <Styled.ProcessTypo>장바구니</Styled.ProcessTypo>
          </Styled.ProcessTypo>
          <Styled.ProcessArrow style={{ color: '#9e9e9e' }} />
          <Styled.ProcessNumberTypo>
            <Styled.ProcessNumberTypoPoint>02</Styled.ProcessNumberTypoPoint>
          </Styled.ProcessNumberTypo>
          &nbsp; &nbsp;
          <Styled.ProcessTypo>
            <Styled.ProcessTypoPoint>주문/결제</Styled.ProcessTypoPoint>
          </Styled.ProcessTypo>
          <Styled.ProcessArrow style={{ color: '#555' }} />
          <Styled.ProcessNumberTypo>03</Styled.ProcessNumberTypo>
          &nbsp; &nbsp;
          <Styled.ProcessTypo>결제 완료</Styled.ProcessTypo>
        </>
      )}
      {step === 2 && (
        <>
          <Styled.ProcessNumberTypo>01</Styled.ProcessNumberTypo>
          &nbsp; &nbsp;
          <Styled.ProcessTypo>
            <Styled.ProcessTypo>장바구니</Styled.ProcessTypo>
          </Styled.ProcessTypo>
          <Styled.ProcessArrow style={{ color: '#9e9e9e' }} />
          <Styled.ProcessNumberTypo>02</Styled.ProcessNumberTypo>
          &nbsp; &nbsp;
          <Styled.ProcessTypo>주문/결제</Styled.ProcessTypo>
          <Styled.ProcessArrow style={{ color: '#9e9e9e' }} />
          <Styled.ProcessNumberTypo>
            <Styled.ProcessNumberTypoPoint>03</Styled.ProcessNumberTypoPoint>
          </Styled.ProcessNumberTypo>
          &nbsp; &nbsp;
          <Styled.ProcessTypo>
            <Styled.ProcessTypoPoint>결제 완료</Styled.ProcessTypoPoint>
          </Styled.ProcessTypo>
        </>
      )}
    </Styled.ProcessContainer>
  );
};
