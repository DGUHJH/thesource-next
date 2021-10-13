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
        <Styled.RightContainer>
          <Styled.TitleTypo>저작권 정책</Styled.TitleTypo>
          <Styled.TitleBar />
          <Styled.ContentContainer>
            <Styled.ContentBodyTypo style={{ marginTop: '40px' }}>
              본 정책의 목적은 ‘디소스’ 내에서 이용되는 콘텐츠의 저작권들이
              무단사용, 변조 등 으로 사용되어 플랫폼 유저들에게 피해를 끼치는
              사례를 방지하기 위함입니다. 콘텐츠 저작권 거래 플랫폼 디소스에서
              제공하는 모든 자료는 저작권법에 의하여 보호받는 저작물로서
              이용자는 아래의 저작권 보호 정책 을 준수하여야 합니다.
            </Styled.ContentBodyTypo>
            <Styled.ContentTitleTypo>1. 저작권의 개념</Styled.ContentTitleTypo>
            <Styled.ContentBodyTypo>
              저작권은 크리에이터가 자신이 창작한 창작물에 대해 갖는 권리입니다.
              저작권의 종류는 법률적으로 세부적으로 나누어 질 수 있습니다.
            </Styled.ContentBodyTypo>
            <Styled.ContentTitleTypo>
              2. 디소스의 무료 저작권 콘텐츠의 이용
            </Styled.ContentTitleTypo>
            <Styled.ContentBodyTypo>
              디소스에서 제공하는 무료 저작권 콘텐츠들은 저작권법 24조 2에 따라
              별도의 이용 허락 및 구매 없이 무료로 자유롭게 이용하셔도 됩니다.
              상업적인 이용도 가능합니다. 하지만 원본을 그대로 이용한 2차판매는
              불가능 합니다.
            </Styled.ContentBodyTypo>
            <Styled.ContentTitleTypo>
              3. 디소스의 유료 저작권 콘텐츠의 이용
            </Styled.ContentTitleTypo>
            <Styled.ContentBodyTypo>
              디소스는 콘텐츠 크리에이터들과 함께 상생하는 플랫폼입니다. 콘텐츠
              크리에이터들이 제작한 유로 저작권 콘텐츠의 경우 각 콘텐츠별
              가격정책에 따라 결제 후 이용이 가능합니다. 결제를 통해 콘텐츠를
              구매하신 경우 이는 저작자와 민형사상의 계약을 맺은것으로 간주되며
              계약에 관련된 데이터는 디소스의 서버 내에 저작되어 법적인 효력이
              발생합니다. 자세한 저작권 사용 범위에 대해서는 [5. 디소스의
              저작권사용 범위]를 확인하세요.
            </Styled.ContentBodyTypo>
            <Styled.ContentTitleTypo>4. 주의</Styled.ContentTitleTypo>
            <Styled.ContentBodyTypo>
              디소스 서버내의 콘텐츠들을 녹화, 녹음 등 불법적인 방법으로
              탈취하여 무단변경, 복제 및 배포, 개작, 사용 등 을 진행할
              경우관련법에 의해 민형사상의 법적 처벌과 책임이 부과될 수 있음을
              알려드립니다.{' '}
            </Styled.ContentBodyTypo>
            <Styled.ContentTitleTypo>
              5. 디소스의 저작권 사용 범위
            </Styled.ContentTitleTypo>
            <Styled.ContentBodyTypo>
              디소스는 크리에이터 여러분의 저작권을 자유롭게 거래함과 동시에
              크리에이터들이 자유롭게 콘텐츠를 제작할 수 있는 정책을 제공하고
              있습니다.
              <br />
              <br />
              (1) 전 세계 사용 가능 디소스의 단일 콘텐츠를 구매하실 경우 전 세계
              누구든, 어디서나 사용하실 수 있습니다.
              <br />
              <br />
              (2) 추가비용 지불 없음 특수 콘텐츠를 제외하고 디소스에서
              구매하시는 콘텐츠들은 추가비용 지불이 필요치 않습니다. 콘텐츠를
              다운 받으신 후 자유롭게 이용하세요.
              <br />
              <br />
              (3)상업적 사용가능 특수 콘텐츠를 제외하고 디소스에서 구매하신
              콘텐츠는 상업적으로 자유롭게 사용가능합니다. 광고, 영화를 비롯한
              어떤 콘텐츠에도 자유롭게 삽입하 실 수 있습니다.
              <br />
              <br />
              (4) 2차 판매 불가 하지만 디소스에서 다운받은 콘텐츠를 다른 곳에
              판매하실 수 없습니다. 판매시 법적인 처벌로 이어질 수 있으니
              주의하시기 바랍니다.
            </Styled.ContentBodyTypo>
            <Styled.ContentLogoTypo>
              콘텐츠 저작권 거래 플랫폼{' '}
              <Styled.ContentLogoTypoPoint>
                TheSource
              </Styled.ContentLogoTypoPoint>
            </Styled.ContentLogoTypo>
          </Styled.ContentContainer>
        </Styled.RightContainer>
      </Styled.BodyContainer>
    </div>
  );
};

const Mobile = () => {
  return <div></div>;
};

export default Main;
