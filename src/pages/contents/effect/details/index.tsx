import detailsBannerLicenseImage from 'assets/images/details_banner_license.png';
import sampleCardImage from 'assets/images/sample_card_image.png';
import { BreadCrumbs } from 'components/BreadCrumbs';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import Image from 'next/image';
import { Dispatch, SetStateAction, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import * as Styled from 'styles/contents/effect/details/styled';

const Main: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  return (
    <Styled.Root>
      <Head>
        <title>디소스/{title} 영상효과</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BrowserView>
        <Pc setTitle={setTitle} />
      </BrowserView>
      <MobileView>
        <Mobile />
      </MobileView>
    </Styled.Root>
  );
};

type Props = {
  setTitle: Dispatch<SetStateAction<string>>;
};

const Pc: React.FC<Props> = ({ setTitle }) => {
  const router = useRouter();
  return (
    <div>
      <BreadCrumbs content={['홈', '이미지', '상세보기']} type="small" />
      <Styled.ContentContainer>
        <Styled.LeftContainer>
          <Styled.ThumbnailWrapper>
            <Image src={sampleCardImage} layout="responsive" />
          </Styled.ThumbnailWrapper>
          <Styled.OtherContentsContainer>
            <Styled.OtherContentsTitleTypo>
              유사 콘텐츠
            </Styled.OtherContentsTitleTypo>
            <Styled.OtherContentsCardContainer>
              {/* <BasketContentsCard />
              <BasketContentsCard />
              <BasketContentsCard />
              <BasketContentsCard /> */}
            </Styled.OtherContentsCardContainer>
          </Styled.OtherContentsContainer>
          {/* <Styled.OtherContentsContainer>
            <Styled.OtherContentsTitleTypo>
              저작권자의 다른 콘텐츠
            </Styled.OtherContentsTitleTypo>
            <Styled.OtherContentsCardContainer>
              <BasketContentsCard />
              <BasketContentsCard />
              <BasketContentsCard />
              <BasketContentsCard />
            </Styled.OtherContentsCardContainer>
          </Styled.OtherContentsContainer> */}
          <Styled.TagContainer>
            <Styled.TagTitleTypo>키워드</Styled.TagTitleTypo>
            <Styled.TagChipContainer>
              <Styled.TagChip>
                <Styled.TagChipTypo># 바닷가</Styled.TagChipTypo>
              </Styled.TagChip>
              <Styled.TagChip>
                <Styled.TagChipTypo># 불가사리</Styled.TagChipTypo>
              </Styled.TagChip>
              <Styled.TagChip>
                <Styled.TagChipTypo># 해변</Styled.TagChipTypo>
              </Styled.TagChip>
              <Styled.TagChip>
                <Styled.TagChipTypo># 여름</Styled.TagChipTypo>
              </Styled.TagChip>
            </Styled.TagChipContainer>
          </Styled.TagContainer>
        </Styled.LeftContainer>
        <Styled.RightContainer>
          <Styled.TitleTypo>백사장에 누워있는 불가사리</Styled.TitleTypo>
          <Styled.ProfileContainer>
            <Styled.ProfileImgSample />
            <Styled.ProfileTypo>태닝탠잉</Styled.ProfileTypo>
          </Styled.ProfileContainer>
          <Styled.InfoContainer>
            <Styled.InfoHeart />
            <Styled.InfoTypo>697</Styled.InfoTypo>
            <Styled.InfoEyes />
            <Styled.InfoTypo>1.2K</Styled.InfoTypo>
          </Styled.InfoContainer>
          <Styled.ContentInfoTable>
            <Styled.ContentInfoContainer>
              <Styled.ContentInfoHeaderContainer>
                <Styled.ContentInfoTypo>유형</Styled.ContentInfoTypo>
              </Styled.ContentInfoHeaderContainer>
              <Styled.ContentInfoBodyContainer
                style={{ borderTop: '1px #e9e9e9 solid' }}
              >
                <Styled.ContentInfoTypo>JPG</Styled.ContentInfoTypo>
              </Styled.ContentInfoBodyContainer>
            </Styled.ContentInfoContainer>
            <Styled.ContentInfoContainer>
              <Styled.ContentInfoHeaderContainer>
                <Styled.ContentInfoTypo>업데이트</Styled.ContentInfoTypo>
              </Styled.ContentInfoHeaderContainer>
              <Styled.ContentInfoBodyContainer>
                <Styled.ContentInfoTypo>2015년 6월 25일</Styled.ContentInfoTypo>
              </Styled.ContentInfoBodyContainer>
            </Styled.ContentInfoContainer>
            <Styled.ContentInfoContainer>
              <Styled.ContentInfoHeaderContainer>
                <Styled.ContentInfoTypo>해상도</Styled.ContentInfoTypo>
              </Styled.ContentInfoHeaderContainer>
              <Styled.ContentInfoBodyContainer>
                <Styled.ContentInfoTypo>7360 x 4912</Styled.ContentInfoTypo>
              </Styled.ContentInfoBodyContainer>
            </Styled.ContentInfoContainer>
            <Styled.ContentInfoContainer>
              <Styled.ContentInfoHeaderContainer
                style={{ borderBottom: '1px #e9e9e9 solid' }}
              >
                <Styled.ContentInfoTypo>카테고리</Styled.ContentInfoTypo>
              </Styled.ContentInfoHeaderContainer>
              <Styled.ContentInfoBodyContainer>
                <Styled.ContentInfoTypo>여행/휴가</Styled.ContentInfoTypo>
              </Styled.ContentInfoBodyContainer>
            </Styled.ContentInfoContainer>
          </Styled.ContentInfoTable>
          <Styled.DownloadButtonContainer>
            <Styled.BlueButton>
              <Styled.BlueButtonTypo>다운로드</Styled.BlueButtonTypo>
            </Styled.BlueButton>
          </Styled.DownloadButtonContainer>
          <Styled.ContentNumberContainer>
            <Styled.ContentNumberHeaderContainer>
              <Styled.ContentNumberTypo>단품</Styled.ContentNumberTypo>
            </Styled.ContentNumberHeaderContainer>
            <Styled.ContentNumberBodyContainer>
              <Styled.ContentNumberTypo>
                {' '}
                <Styled.ContentNumberTypoPoint>
                  {' '}
                  1{' '}
                </Styled.ContentNumberTypoPoint>{' '}
                개{' '}
              </Styled.ContentNumberTypo>
            </Styled.ContentNumberBodyContainer>
          </Styled.ContentNumberContainer>
          <Styled.DownloadButtonContainer>
            <Styled.WhiteButton>
              <Styled.WhiteButtonTypo>장바구니</Styled.WhiteButtonTypo>
            </Styled.WhiteButton>
            <Styled.BlueButton>
              <Styled.BlueButtonTypo>단품구매</Styled.BlueButtonTypo>
            </Styled.BlueButton>
          </Styled.DownloadButtonContainer>
          <Styled.LicenseContainer>
            <Styled.LicenseTitleTypo>라이선스 내용</Styled.LicenseTitleTypo>
            <Styled.LicenseContentContainer>
              <Styled.LicenseContentTypo>
                &#183;&nbsp; 전세계 사용 가능
              </Styled.LicenseContentTypo>
              <Styled.LicenseContentTypo>
                &#183;&nbsp; 2차 판매 불가
              </Styled.LicenseContentTypo>
              <Styled.LicenseContentTypo>
                &#183;&nbsp; 추가 비용 지불 없음
              </Styled.LicenseContentTypo>
              <Styled.LicenseContentTypo>
                &#183;&nbsp; 상업적 사용 가능
              </Styled.LicenseContentTypo>
            </Styled.LicenseContentContainer>
          </Styled.LicenseContainer>
          <Styled.BannerImage>
            <Image src={detailsBannerLicenseImage} layout="fill" />
          </Styled.BannerImage>
        </Styled.RightContainer>
      </Styled.ContentContainer>
    </div>
  );
};

const Mobile = () => {
  return <div>2</div>;
};

export default Main;
