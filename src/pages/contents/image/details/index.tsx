import { getImageDetail } from 'api/contents/fetch';
import detailsBannerLicenseImage from 'assets/images/details_banner_license.png';
import sampleCardImage from 'assets/images/sample_card_image.png';
import { BreadCrumbs } from 'components/BreadCrumbs';
import { BasketContentsCard } from 'components/Card/BasketContents';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import * as Styled from 'styles/contents/image/details/styled';
import {
  ImageContentDetailResponse,
  ImageContentDetailType,
} from 'types/contents';

type Props = {
  id: string;
};

const Main: React.FC<Props> = ({ id }) => {
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
  const [data, setData] = useState<ImageContentDetailType>();
  const { query }: any = useRouter();

  useEffect(() => {
    getImageDetail(query.id).then((res: ImageContentDetailResponse) => {
      if (res.status.type === 'success') {
        setData(res.data);
      }
    });
  }, []);

  console.log(data);
  return (
    <div>
      <BreadCrumbs content={['홈', '이미지', '상세보기']} type="small" />
      <Styled.ContentContainer>
        <Styled.LeftContainer>
          <Styled.ThumbnailWrapper>
            <Image
              src={data?.preview ?? sampleCardImage}
              width="900px"
              height="600px"
              objectFit="contain"
            />
          </Styled.ThumbnailWrapper>
          <Styled.OtherContentsContainer>
            <Styled.OtherContentsTitleTypo>
              유사 콘텐츠
            </Styled.OtherContentsTitleTypo>
            <Styled.OtherContentsCardContainer>
              <BasketContentsCard />
              <BasketContentsCard />
              <BasketContentsCard />
              <BasketContentsCard />
            </Styled.OtherContentsCardContainer>
          </Styled.OtherContentsContainer>
          <Styled.OtherContentsContainer>
            <Styled.OtherContentsTitleTypo>
              저작권자의 다른 콘텐츠
            </Styled.OtherContentsTitleTypo>
            <Styled.OtherContentsCardContainer>
              <BasketContentsCard />
              <BasketContentsCard />
              <BasketContentsCard />
              <BasketContentsCard />
            </Styled.OtherContentsCardContainer>
          </Styled.OtherContentsContainer>
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
                  {data?.file_extension}
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
                <Styled.ContentInfoTypo>수정좀 </Styled.ContentInfoTypo>
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
