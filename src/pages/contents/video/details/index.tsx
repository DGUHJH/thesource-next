import { getVideoDetail } from 'api/contents/fetch';
import detailsBannerLicenseImage from 'assets/images/details_banner_license.png';
import { BreadCrumbs } from 'components/BreadCrumbs';
import { BasketContentsCard } from 'components/Card/BasketContents';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import Image from 'next/image';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import YouTube from 'react-youtube';
import * as Styled from 'styles/contents/video/details/styled';
import {
  ContentType,
  VideoContentDetailResponse,
  VideoContentDetailType,
} from 'types/contents';

const Main: React.FC = () => {
  const [title, setTitle] = useState<string>('');

  return (
    <Styled.Root>
      <Head>
        <title>디소스/{title} 영상클립</title>
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
  const [data, setData] = useState<VideoContentDetailType>();
  const { query }: any = useRouter();

  useEffect(() => {
    if (query.id) {
      getVideoDetail(query.id).then((res: VideoContentDetailResponse) => {
        if (res.status.type === 'success') {
          setData(res.data);
          setTitle(res.data.title);
        }
        console.log(res);
      });
    }
  }, [query]);
  return (
    <div>
      <BreadCrumbs content={['홈', '이미지', '상세보기']} type="small" />
      <Styled.ContentContainer>
        <Styled.LeftContainer>
          <Styled.ThumbnailWrapper>
            <YouTube
              videoId={data?.youtube_link.split('https://youtu.be/')[1]}
              opts={{ width: '900px', height: '506px' }}
            />
          </Styled.ThumbnailWrapper>
          <Styled.OtherContentsContainer>
            <Styled.OtherContentsTitleTypo>
              유사 콘텐츠
            </Styled.OtherContentsTitleTypo>
            <Styled.OtherContentsCardContainer>
              {data?.recommends.map(
                (value: ContentType, index: number) =>
                  index < 4 && (
                    <BasketContentsCard
                      id={value.id}
                      thumbnail={value.thumbnail}
                      content_type={value.content_type}
                      key={`backet_contents_card_${index}`}
                    />
                  )
              )}
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
              {data?.tags.map((value, index: number) => (
                <Styled.TagChip key={`tag_chip_${index}`}>
                  <Styled.TagChipTypo># {value.name}</Styled.TagChipTypo>
                </Styled.TagChip>
              ))}
            </Styled.TagChipContainer>
          </Styled.TagContainer>
        </Styled.LeftContainer>
        <Styled.RightContainer>
          <Styled.TitleTypo>{data?.title}</Styled.TitleTypo>
          <Styled.ProfileContainer>
            <Styled.ProfileImgSample />
            <Styled.ProfileTypo>{data?.user.username}</Styled.ProfileTypo>
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
                <Styled.ContentInfoTypo>
                  {data?.content_type}
                </Styled.ContentInfoTypo>
              </Styled.ContentInfoBodyContainer>
            </Styled.ContentInfoContainer>
            <Styled.ContentInfoContainer>
              <Styled.ContentInfoHeaderContainer>
                <Styled.ContentInfoTypo>업데이트</Styled.ContentInfoTypo>
              </Styled.ContentInfoHeaderContainer>
              <Styled.ContentInfoBodyContainer>
                <Styled.ContentInfoTypo>
                  {data?.created_at.slice(0, 10)}
                </Styled.ContentInfoTypo>
              </Styled.ContentInfoBodyContainer>
            </Styled.ContentInfoContainer>
            <Styled.ContentInfoContainer>
              <Styled.ContentInfoHeaderContainer>
                <Styled.ContentInfoTypo>해상도</Styled.ContentInfoTypo>
              </Styled.ContentInfoHeaderContainer>
              <Styled.ContentInfoBodyContainer>
                <Styled.ContentInfoTypo>
                  {data?.file_size}
                </Styled.ContentInfoTypo>
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
