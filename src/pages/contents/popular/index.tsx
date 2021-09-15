import { BreadCrumbs } from 'components/BreadCrumbs';
import { ContentsCard } from 'components/Card/Contents';
import { BrowserView, MobileView } from 'react-device-detect';
import * as Styled from 'styles/contents/popular/styled';

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
      <BreadCrumbs content={['홈', '인기콘텐츠']} />
      <Styled.Container>
        <Styled.CategoryContainer>
          <Styled.CategoryPointTypo>전체</Styled.CategoryPointTypo>
          <Styled.CategoryBar />
          <Styled.CategoryTypo>이미지</Styled.CategoryTypo>
          <Styled.CategoryBar />
          <Styled.CategoryTypo>음원소스</Styled.CategoryTypo>
          <Styled.CategoryBar />
          <Styled.CategoryTypo>영상클립</Styled.CategoryTypo>
          <Styled.CategoryBar />
          <Styled.CategoryTypo>영상효과</Styled.CategoryTypo>
        </Styled.CategoryContainer>
        <Styled.ContentsContainer>
          <Styled.ContentsCardWrapper>
            <ContentsCard />
          </Styled.ContentsCardWrapper>
          <Styled.ContentsCardWrapper>
            <ContentsCard />
          </Styled.ContentsCardWrapper>
          <Styled.ContentsCardWrapper>
            <ContentsCard />
          </Styled.ContentsCardWrapper>
          <Styled.ContentsCardWrapper>
            <ContentsCard />
          </Styled.ContentsCardWrapper>
          <Styled.ContentsCardWrapper>
            <ContentsCard />
          </Styled.ContentsCardWrapper>
          <Styled.ContentsCardWrapper>
            <ContentsCard />
          </Styled.ContentsCardWrapper>
          <Styled.ContentsCardWrapper>
            <ContentsCard />
          </Styled.ContentsCardWrapper>
          <Styled.ContentsCardWrapper>
            <ContentsCard />
          </Styled.ContentsCardWrapper>
        </Styled.ContentsContainer>
      </Styled.Container>
    </div>
  );
};

const Mobile = () => {
  return <div>2</div>;
};

export default Main;
