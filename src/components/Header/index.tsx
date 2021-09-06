import headerLogo from 'assets/images/header_logo.png';
import mainBanner from 'assets/images/main_banner.png';
import { SearchBar } from 'components/SearchBar';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import React from 'react';
import * as Styled from './styled';

const contentMenu = [
  {
    label: '인기콘텐츠',
    url: '/contents/popular',
  },
  {
    label: '이미지',
    url: '',
  },
  {
    label: '음원소스',
    url: '',
  },
  {
    label: '영상클립',
    url: '',
  },
  {
    label: '영상효과',
    url: '',
  },
  {
    label: '커뮤니티',
    url: '',
  },
];

const userMenu = [
  {
    label: '로그인',
    url: '',
  },
  {
    label: '회원가입',
    url: '',
  },
  {
    label: '고객센터',
    url: '',
  },
];

export const Header = () => {
  const router = useRouter();

  const onMenuClick = (url: string) => () => {
    router.push(url);
  };

  return (
    <Styled.Root>
      <Styled.MenuContainer>
        <Styled.LeftContainer>
          <Styled.LogoImageWrapper>
            <Image src={headerLogo} />
          </Styled.LogoImageWrapper>
          {contentMenu.map((value, index) => (
            <Styled.LeftMenuTypo
              key={`header_left_menu_typo_${index}`}
              onClick={onMenuClick(value.url)}
            >
              {value.label}
            </Styled.LeftMenuTypo>
          ))}
        </Styled.LeftContainer>
        <Styled.RightContainer>
          {userMenu.map((value, index) => (
            <>
              {index != 0 && <Styled.RightMenuDivBar />}
              <Styled.RightMenuTypo key={`header_right_menu_typo_${index}`}>
                {value.label}
              </Styled.RightMenuTypo>
            </>
          ))}
        </Styled.RightContainer>
      </Styled.MenuContainer>
      <Styled.BannerContainer>
        <Styled.BannerWrapper>
          <Image height={600} src={mainBanner} layout="fill" />
        </Styled.BannerWrapper>
        <Styled.SearchBarWrapper>
          <SearchBar />
        </Styled.SearchBarWrapper>
      </Styled.BannerContainer>
    </Styled.Root>
  );
};

export const MHeader = () => {
  return <div>2</div>;
};
