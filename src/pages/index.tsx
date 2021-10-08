import { getSwiperData } from 'api/home/fetch';
import iconMenu1 from 'assets/images/icon_menu_1.png';
import iconMenu2 from 'assets/images/icon_menu_2.png';
import iconMenu3 from 'assets/images/icon_menu_3.png';
import iconMenu4 from 'assets/images/icon_menu_4.png';
import iconMenu5 from 'assets/images/icon_menu_5.png';
import { SmallContentsCard } from 'components/Card/SmallContents';
import { joinDialogOpen } from 'features/join/joinDialogSlice';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { useDispatch } from 'react-redux';
import * as Styled from 'styles/styled';
import {
  ContentsType,
  ContentType,
  MainContentsResponse,
} from 'types/contents';

const iconMenuList = [iconMenu1, iconMenu2, iconMenu3, iconMenu4, iconMenu5];

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
  const dispatch = useDispatch();
  const [popularityData, setPopularityData] = useState<ContentsType>([]);

  const onJoinButtonClick = () => {
    dispatch(joinDialogOpen());
  };

  useEffect(() => {
    getSwiperData().then((res: MainContentsResponse) => {
      if (res.status.type === 'success') {
        setPopularityData(res.data.popularity_swiper);
      }
    });
  }, []);

  return (
    <Styled.Body>
      <Styled.IconMenuBody>
        <Styled.IconMenuContainer>
          <Styled.IconMenuLeftContainer>
            {iconMenuList.map((value, index) => (
              <>
                {index != 0 && (
                  <Styled.IconMenuBarWrapper>
                    <Styled.IconMenuBar />
                  </Styled.IconMenuBarWrapper>
                )}
                <Styled.IconMenuWrapper key={`icon_menu_wrapper_${index}`}>
                  <Image src={value} layout="responsive" />
                </Styled.IconMenuWrapper>
              </>
            ))}
          </Styled.IconMenuLeftContainer>
          <Styled.IconMenuRightContainer>
            <Styled.IconMenuRightJoinButton
              variant="outlined"
              onClick={onJoinButtonClick}
            >
              <Styled.IconMenuRightJoinButtonTypo>
                무료회원가입
              </Styled.IconMenuRightJoinButtonTypo>
            </Styled.IconMenuRightJoinButton>
          </Styled.IconMenuRightContainer>
        </Styled.IconMenuContainer>
      </Styled.IconMenuBody>
      <Styled.BestContentContainer>
        <Styled.BestContentTitleWrapper>
          <Styled.BestContentTitleTypo>
            <Styled.BestContentTitleTypoBold>
              BEST
            </Styled.BestContentTitleTypoBold>{' '}
            <Styled.BestContentTitleTypoLight>
              CONTENT
            </Styled.BestContentTitleTypoLight>
          </Styled.BestContentTitleTypo>
        </Styled.BestContentTitleWrapper>
        <Styled.BestContentListContainer>
          {popularityData?.map((content: ContentType, index: number) => (
            <SmallContentsCard
              {...content}
              key={`main_small_contents_card_${index}`}
            />
          ))}
        </Styled.BestContentListContainer>
      </Styled.BestContentContainer>
    </Styled.Body>
  );
};

const Mobile = () => {
  return <div>2</div>;
};

export default Main;
