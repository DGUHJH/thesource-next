import { PopularContainer } from 'components/Container/Popular';
import Head from 'next/head';
import { BrowserView, MobileView } from 'react-device-detect';
import * as Styled from 'styles/styled';

const Main = () => {
  return (
    <Styled.Root>
      <Head>
        <title>디소스 (The Source)</title>
        <meta name="description" content="디소스 - 메인 페이지" />
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
      <PopularContainer />
    </div>
  );
};

const Mobile = () => {
  return <div>2</div>;
};

export default Main;
