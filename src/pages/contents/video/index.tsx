import { getVideoList } from 'api/contents/fetch';
import { BreadCrumbs } from 'components/BreadCrumbs';
import { ContentsCard } from 'components/Card/Contents';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import * as Styled from 'styles/contents/video/styled';
import { ContentsResponse, ContentsType } from 'types/contents';

const Main = () => {
  return (
    <Styled.Root>
      <Head>
        <title>디소스/영상클립 리스트</title>
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
  const [data, setData] = useState<ContentsType>();

  useEffect(() => {
    getVideoList(1).then((res: ContentsResponse) => {
      if (res.status.type === 'success') {
        setData(res.data);
      }
    });
  }, []);

  return (
    <div>
      <BreadCrumbs content={['홈', '이미지']} />
      <Styled.BodyContainer>
        <Styled.LeftContainer>필터</Styled.LeftContainer>
        <Styled.RightContainer>
          {data?.map((content, index: number) => (
            <Styled.ContentsCardWrapper
              key={`audio_contents_card_wrapper_${index}`}
            >
              <ContentsCard {...content} />
            </Styled.ContentsCardWrapper>
          ))}
        </Styled.RightContainer>
      </Styled.BodyContainer>
    </div>
  );
};

const Mobile = () => {
  return <div>2</div>;
};

export default Main;
