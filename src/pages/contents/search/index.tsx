import { BreadCrumbs } from 'components/BreadCrumbs';
import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import * as Styled from 'styles/contents/search/styled';

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
      <BreadCrumbs content={['홈', '검색결과']} />
      <Styled.SearchInfoContainer>
        <Styled.SearchInfoMenuContainer>
          <Styled.SearchInfoMenuTypo>검색결과</Styled.SearchInfoMenuTypo>
          <Styled.SearchInfoMenuNumberTypoPoint>
            25,374
          </Styled.SearchInfoMenuNumberTypoPoint>
          <Styled.SearchInfoMenuTypoPoint>
            콘텐츠
          </Styled.SearchInfoMenuTypoPoint>
        </Styled.SearchInfoMenuContainer>
        <Styled.SearchInfoMenuContainer>
          <Styled.SearchInfoMenuTypo style={{ marginRight: '20px' }}>
            연관 키워드
          </Styled.SearchInfoMenuTypo>
          <Styled.SearchInfoChip>
            <Styled.SearchInfoChipTypo># 테이블</Styled.SearchInfoChipTypo>
          </Styled.SearchInfoChip>
          <Styled.SearchInfoChip>
            <Styled.SearchInfoChipTypo># 점심식사</Styled.SearchInfoChipTypo>
          </Styled.SearchInfoChip>
          <Styled.SearchInfoChip>
            <Styled.SearchInfoChipTypo># 식사</Styled.SearchInfoChipTypo>
          </Styled.SearchInfoChip>
          <Styled.SearchInfoChip>
            <Styled.SearchInfoChipTypo># 식당</Styled.SearchInfoChipTypo>
          </Styled.SearchInfoChip>
        </Styled.SearchInfoMenuContainer>
      </Styled.SearchInfoContainer>
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
        {/* <Styled.ContentsContainer>
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
        </Styled.ContentsContainer> */}
      </Styled.Container>
    </div>
  );
};

const Mobile = () => {
  return <div></div>;
};

export default Main;
