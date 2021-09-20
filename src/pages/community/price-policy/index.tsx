import pricePolicy from 'assets/images/price_policy.png';
import { BreadCrumbs } from 'components/BreadCrumbs';
import { CommunityMenuContainer } from 'components/Container/CommunityMenu';
import Image from 'next/image';
import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import * as Styled from 'styles/community/price-policy/styled';

const Main = () => {
  return (
    <Styled.Root>
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
      <BreadCrumbs content={['홈', '커뮤니티', '가격정책']} type="small" />
      <Styled.BodyContainer>
        <Styled.LeftContainer>
          <CommunityMenuContainer />
        </Styled.LeftContainer>
        <Styled.RightContainer>
          <Styled.TitleTypo>가격정책</Styled.TitleTypo>
          <Styled.TableImgWrapper>
            <Image src={pricePolicy} layout="fill" />
          </Styled.TableImgWrapper>
        </Styled.RightContainer>
      </Styled.BodyContainer>
    </div>
  );
};

const Mobile = () => {
  return <div></div>;
};

export default Main;
