import mainBannerLicense from 'assets/images/main_banner_license.png';
import Image from 'next/image';
import React from 'react';
import * as Styled from './styled';

export const PopularContainer = () => {
  return (
    <Styled.Root>
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
          {/* <SmallContentsCard />
          <SmallContentsCard />
          <SmallContentsCard />
          <SmallContentsCard />
          <SmallContentsCard /> */}
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
          {/* <ContentsCard />
          <ContentsCard />
          <ContentsCard />
          <ContentsCard /> */}
        </Styled.NewContentListContainer>
        <Styled.LicenseContainer>
          <Styled.LicenseImgWrapper>
            <Image src={mainBannerLicense} layout="responsive" />
          </Styled.LicenseImgWrapper>
        </Styled.LicenseContainer>
      </Styled.NewContentContainer>
    </Styled.Root>
  );
};

export const MPopularContainer = () => {
  return <div>2</div>;
};
