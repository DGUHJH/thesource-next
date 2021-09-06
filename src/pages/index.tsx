import iconMenu1 from 'assets/images/icon_menu_1.png';
import iconMenu2 from 'assets/images/icon_menu_2.png';
import iconMenu3 from 'assets/images/icon_menu_3.png';
import iconMenu4 from 'assets/images/icon_menu_4.png';
import iconMenu5 from 'assets/images/icon_menu_5.png';
import iconMenu6 from 'assets/images/icon_menu_6.png';
import iconMenu7 from 'assets/images/icon_menu_7.png';
import mainBannerLicense from 'assets/images/main_banner_license.png';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import Head from 'next/head';
import Image from 'next/image';
import { BrowserView, MobileView } from 'react-device-detect';
import * as Styled from 'styles/styled';

const iconMenuList = [
  iconMenu1,
  iconMenu2,
  iconMenu3,
  iconMenu4,
  iconMenu5,
  iconMenu6,
  iconMenu7,
];

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
    <Styled.Body>
      <Header />
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
            <Styled.IconMenuRightJoinButton variant="outlined">
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
          <Styled.BestContentListSample />
          <Styled.BestContentListSample />
          <Styled.BestContentListSample />
          <Styled.BestContentListSample />
          <Styled.BestContentListSample />
        </Styled.BestContentListContainer>
      </Styled.BestContentContainer>
      <Styled.NewContentContainer>
        <Styled.NewContentTitleWrapper>
          <Styled.NewContentTitleTypo>
            <Styled.NewContentTitleTypoBold>NEW</Styled.NewContentTitleTypoBold>{' '}
            <Styled.NewContentTitleTypoLight>
              CONTENT
            </Styled.NewContentTitleTypoLight>
          </Styled.NewContentTitleTypo>
        </Styled.NewContentTitleWrapper>
        <Styled.NewContentListContainer>
          <Styled.NewContentListSample />
          <Styled.NewContentListSample />
          <Styled.NewContentListSample />
        </Styled.NewContentListContainer>
        <Styled.LicenseContainer>
          <Styled.LicenseImgWrapper>
            <Image src={mainBannerLicense} layout="responsive" />
          </Styled.LicenseImgWrapper>
        </Styled.LicenseContainer>
      </Styled.NewContentContainer>
      <Footer />
    </Styled.Body>
  );
};

const Mobile = () => {
  return <div>2</div>;
};

export default Main;
