import { getPopularityList } from 'api/contents/fetch';
import { BreadCrumbs } from 'components/BreadCrumbs';
import { ContentsCard } from 'components/Card/Contents';
import { useEffect, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import * as Styled from 'styles/contents/popular/styled';
import { PopularContentsResponse, PopularContentsType } from 'types/contents';

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

type ContentType = '전체' | '이미지' | '음원소스' | '영상클립' | '영상효과';

const contentTypeList: ContentType[] = [
  '전체',
  '이미지',
  '음원소스',
  '영상클립',
  '영상효과',
];

const Pc = () => {
  const [data, setData] = useState<PopularContentsType>();
  const [select, setSelect] = useState<ContentType>('전체');

  const onMenuClick = (value: ContentType) => () => {
    setSelect(value);
  };

  useEffect(() => {
    getPopularityList().then((res: PopularContentsResponse) => {
      if (res.status.type === 'success') {
        setData(res.data);
      }
    });
  }, []);
  return (
    <div>
      <BreadCrumbs content={['홈', '인기콘텐츠']} />
      <Styled.Container>
        <Styled.CategoryContainer>
          {contentTypeList.map((value, index: number) =>
            value === select ? (
              <>
                {index !== 0 && <Styled.CategoryBar />}
                <Styled.CategoryPointTypo
                  onClick={onMenuClick(value)}
                  key={`category_point_typo_${index}`}
                >
                  {value}
                </Styled.CategoryPointTypo>
              </>
            ) : (
              <>
                {index !== 0 && <Styled.CategoryBar />}
                <Styled.CategoryTypo
                  onClick={onMenuClick(value)}
                  key={`category_typo_${index}`}
                >
                  {value}
                </Styled.CategoryTypo>
              </>
            )
          )}
        </Styled.CategoryContainer>
        <Styled.ContentsContainer>
          {(select === '전체' || select === '이미지') &&
            data?.images?.map((content, index: number) => (
              <Styled.ContentsCardWrapper
                key={`contents_card_wrapper_${index}`}
              >
                <ContentsCard {...content} />
              </Styled.ContentsCardWrapper>
            ))}
          {(select === '전체' || select === '음원소스') &&
            data?.audios?.map((content, index: number) => (
              <Styled.ContentsCardWrapper
                key={`contents_card_wrapper_${index}`}
              >
                <ContentsCard {...content} />
              </Styled.ContentsCardWrapper>
            ))}
          {(select === '전체' || select === '영상효과') &&
            data?.effects?.map((content, index: number) => (
              <Styled.ContentsCardWrapper
                key={`contents_card_wrapper_${index}`}
              >
                <ContentsCard {...content} />
              </Styled.ContentsCardWrapper>
            ))}
          {(select === '전체' || select === '영상클립') &&
            data?.videos?.map((content, index: number) => (
              <Styled.ContentsCardWrapper
                key={`contents_card_wrapper_${index}`}
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
  return <div>2</div>;
};

export default Main;
