import sampleCardImage from 'assets/images/sample_card_image.png';
import { BreadCrumbs } from 'components/BreadCrumbs';
import { BasketContentsCard } from 'components/Card/BasketContents';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import { BrowserView, MobileView } from 'react-device-detect';
import * as Styled from 'styles/contents/image/details/styled';

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
  const router = useRouter();
  console.log(router);
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
        </Styled.RightContainer>
      </Styled.ContentContainer>
    </div>
  );
};

const Mobile = () => {
  return <div>2</div>;
};

export default Main;
