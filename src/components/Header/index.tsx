import headerLogo from 'assets/images/header_logo.png';
import mainBanner from 'assets/images/main_banner.png';
import { LoginDialog } from 'components/Dialog/Login';
import { SearchBar } from 'components/SearchBar';
import {
  loginDialogClose,
  loginDialogOpen,
} from 'features/login/loginDialogSlice';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import React from 'react';
import { useDispatch } from 'react-redux';
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

export const Header = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLoginDialog = (value: boolean) => () => {
    if (value) {
      dispatch(loginDialogOpen());
    } else {
      dispatch(loginDialogClose());
    }
  };

  const onMenuClick = (url: string) => () => {
    router.push(url);
  };

  const userMenu = [
    {
      label: '로그인',
      onClick: handleLoginDialog(true),
    },
    {
      label: '회원가입',
      onClick: handleLoginDialog(true),
    },
    {
      label: '고객센터',
      onClick: handleLoginDialog(true),
    },
  ];

  return (
    <Styled.Root>
      <Styled.MenuContainer>
        <Styled.LeftContainer>
          <Styled.LogoImageWrapper onClick={onMenuClick('/')}>
            <Image src={headerLogo} />
          </Styled.LogoImageWrapper>
          {contentMenu.map((value, index) => (
            <Styled.LeftMenuTypo
              style={
                router?.pathname === value.url
                  ? { fontFamily: 'NotoSans-Bold', color: '#4EA5FC' }
                  : {}
              }
              key={`header_left_menu_typo_${index}`}
              onClick={onMenuClick(value.url)}
            >
              {value.label}
            </Styled.LeftMenuTypo>
          ))}
        </Styled.LeftContainer>
        <Styled.RightContainer>
          {userMenu.map((value, index) => (
            <div
              style={{ display: 'flex', alignItems: 'center' }}
              key={`header_right_menu_typo_${index}`}
            >
              {index != 0 && <Styled.RightMenuDivBar />}
              <Styled.RightMenuTypo onClick={value.onClick}>
                {value.label}
              </Styled.RightMenuTypo>
            </div>
          ))}
        </Styled.RightContainer>
      </Styled.MenuContainer>
      <Styled.BannerContainer
        style={
          router?.pathname === '/' ? { height: '600px' } : { height: '240px' }
        }
      >
        <Styled.BannerWrapper>
          <Image src={mainBanner} layout="fill" />
        </Styled.BannerWrapper>
        <Styled.SearchBarWrapper
          style={router?.pathname === '/' ? { top: '270px' } : { top: '90px' }}
        >
          <SearchBar />
        </Styled.SearchBarWrapper>
      </Styled.BannerContainer>
      <LoginDialog />
    </Styled.Root>
  );
};

export const MHeader = () => {
  return <div>2</div>;
};
