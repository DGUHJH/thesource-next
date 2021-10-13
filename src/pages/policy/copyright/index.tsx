import { BreadCrumbs } from 'components/BreadCrumbs';
import { PolicyMenuContainer } from 'components/Container/PolicyMenu';
import Head from 'next/head';
import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import * as Styled from 'styles/policy/copyright/styled';

const Main = () => {
  return (
    <Styled.Root>
      <Head>
        <title>디소스/저작권 정책</title>
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
      <BreadCrumbs content={['홈', '정책', '저작권 정책']} type="small" />
      <Styled.BodyContainer>
        <Styled.LeftContainer>
          <PolicyMenuContainer />
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
