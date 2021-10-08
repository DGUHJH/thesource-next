import { BreadCrumbs } from 'components/BreadCrumbs';
import { MyPageMenuContainer } from 'components/Container/MyPageMenu';
import Head from 'next/head';
import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import * as Styled from 'styles/mypage/download/styled';

const Main = () => {
  return (
    <Styled.Root>
      <Head>
        <title>디소스/다운로드 내역</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BrowserView>
        <Pc />
      </BrowserView>
      <MobileView>
        <Mobile />
      </MobileView>
    </Styled.Root>
  );
};

const Pc = () => {
  return (
    <div>
      <BreadCrumbs content={['홈', '마이페이지', '결제내역']} type="small" />
      <Styled.BodyContainer>
        <Styled.LeftContainer>
          <MyPageMenuContainer />
        </Styled.LeftContainer>
        <Styled.RightContainer>asd</Styled.RightContainer>
      </Styled.BodyContainer>
    </div>
  );
};

const Mobile = () => {
  return <div></div>;
};

export default Main;
