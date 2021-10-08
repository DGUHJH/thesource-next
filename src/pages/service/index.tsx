import { BreadCrumbs } from 'components/BreadCrumbs';
import Head from 'next/head';
import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import * as Styled from 'styles/purchase/styled';

const Main = () => {
  return (
    <Styled.Root>
      <Head>
        <title>디소스/고객센터</title>
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
      <BreadCrumbs content={['홈', '고객센터']} type="small" />
    </div>
  );
};

const Mobile = () => {
  return <div></div>;
};

export default Main;
