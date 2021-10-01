import { BreadCrumbs } from 'components/BreadCrumbs';
import { CommunityMenuContainer } from 'components/Container/CommunityMenu';
import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import * as Styled from 'styles/community/faq/styled';

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
      <BreadCrumbs content={['홈', '커뮤니티', 'FAQ']} type="small" />
      <Styled.BodyContainer>
        <Styled.LeftContainer>
          <CommunityMenuContainer />
        </Styled.LeftContainer>
        <Styled.RightContainer>
          <Styled.TitleTypo>FAQ</Styled.TitleTypo>
          <Styled.Bar />
        </Styled.RightContainer>
      </Styled.BodyContainer>
    </div>
  );
};

const Mobile = () => {
  return <div></div>;
};

export default Main;
