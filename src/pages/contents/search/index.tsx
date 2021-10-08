import { getSearchList } from 'api/search/fetch';
import { BreadCrumbs } from 'components/BreadCrumbs';
import { ContentsCard } from 'components/Card/Contents';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import * as Styled from 'styles/contents/search/styled';
import { SearchedContentsResponse, SearchedContentsType } from 'types/contents';

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

type SelectType = 'all' | 'images' | 'audios' | 'videos' | 'effects';
type SelectListType = { [Property in SelectType]: string };

const selectList: Record<string, string> = {
  all: '전체',
  images: '이미지',
  audios: '음원소스',
  videos: '영상클립',
  effects: '영상효과',
};

const Pc = () => {
  const { query }: any = useRouter();
  const [data, setData] = useState<SearchedContentsType>();
  const [select, setSelect] = useState<string>('all');

  useEffect(() => {
    getSearchList({ keyword: query.searchWord, type: 'all' }).then(
      (res: SearchedContentsResponse) => {
        if (res.status.type === 'success') {
          setData(res.data);
        }
      }
    );
  }, [query.searchWord]);

  const onSelectChange = (id: string) => () => {
    setSelect(id);
  };

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
          {Object.keys(selectList).map((value, index: number) => (
            <Styled.CategoryTypoWrapper>
              {select !== value ? (
                <Styled.CategoryTypo
                  key={`category_type_${index}`}
                  onClick={onSelectChange(value)}
                >
                  {selectList[value]}
                </Styled.CategoryTypo>
              ) : (
                <Styled.CategoryPointTypo key={`category_point_type_${index}`}>
                  {selectList[value]}
                </Styled.CategoryPointTypo>
              )}
              {index !== 4 && (
                <Styled.CategoryBar key={`category_bar_${index}`} />
              )}
            </Styled.CategoryTypoWrapper>
          ))}
        </Styled.CategoryContainer>
        <Styled.ContentsContainer>
          {(select === 'all' || select === 'images') &&
            data?.images?.map((content, index: number) => (
              <Styled.ContentsCardWrapper key={`search_image_content_${index}`}>
                <ContentsCard {...content} />
              </Styled.ContentsCardWrapper>
            ))}
          {(select === 'all' || select === 'audios') &&
            data?.audios?.map((content, index: number) => (
              <Styled.ContentsCardWrapper key={`search_audio_content_${index}`}>
                <ContentsCard {...content} />
              </Styled.ContentsCardWrapper>
            ))}
          {(select === 'all' || select === 'vidoes') &&
            data?.videos?.map((content, index: number) => (
              <Styled.ContentsCardWrapper key={`search_video_content_${index}`}>
                <ContentsCard {...content} />
              </Styled.ContentsCardWrapper>
            ))}
          {(select === 'all' || select === 'effects') &&
            data?.effects?.map((content, index: number) => (
              <Styled.ContentsCardWrapper
                key={`search_effect_content_${index}`}
              >
                <ContentsCard {...content} />
              </Styled.ContentsCardWrapper>
            ))}
        </Styled.ContentsContainer>
      </Styled.Container>
    </div>
  );
};

const Mobile = () => {
  return <div></div>;
};

export default Main;
