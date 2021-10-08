import { BreadCrumbs } from 'components/BreadCrumbs';
import { CommunityMenuContainer } from 'components/Container/CommunityMenu';
import Head from 'next/head';
import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import * as Styled from 'styles/community/manual/styled';

const Main = () => {
  return (
    <Styled.Root>
      <Head>
        <title>디소스/매뉴얼</title>
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
      <BreadCrumbs content={['홈', '커뮤니티', '매뉴얼']} type="small" />
      <Styled.BodyContainer>
        <Styled.LeftContainer>
          <CommunityMenuContainer />
        </Styled.LeftContainer>
        <Styled.RightContainer>
          <Styled.TitleTypo>사용 매뉴얼</Styled.TitleTypo>
          <Styled.Bar />
          <Styled.Youtube />
        </Styled.RightContainer>
      </Styled.BodyContainer>
    </div>
  );
};

const Mobile = () => {
  return <div></div>;
};

export default Main;
