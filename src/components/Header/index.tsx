import { Badge } from '@material-ui/core';
import { getCartList } from 'api/cart/fetch';
import { getUserInfo } from 'api/login/fetch';
import headerLogo from 'assets/images/header_logo.png';
import mainBanner from 'assets/images/main_banner.png';
import { JoinDialog } from 'components/Dialog/Join';
import { LoginDialog } from 'components/Dialog/Login';
import { SearchBar } from 'components/SearchBar';
import { ReducerType } from 'features';
import { joinDialogClose, joinDialogOpen } from 'features/join/joinDialogSlice';
import {
  loginDialogClose,
  loginDialogOpen,
} from 'features/login/loginDialogSlice';
import {
  LoginState,
  setLogin,
  setLogout,
  setUserInfo,
} from 'features/login/loginSlice';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CartListType } from 'types/cart';
import * as Styled from './styled';

const contentMenu = [
  {
    label: '인기콘텐츠',
    url: '/contents/popular',
  },
  {
    label: '이미지',
    url: '/contents/image',
  },
  {
    label: '음원소스',
    url: '/contents/audio',
  },
  {
    label: '영상클립',
    url: '/contents/video',
  },
  {
    label: '영상효과',
    url: '/contents/effect',
  },
  {
    label: '커뮤니티',
    url: '/community/manual',
  },
];

export const Header = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const loginData = useSelector<ReducerType, LoginState>(
    (state) => state.login
  );
  const [cartCount, setCartCount] = useState<number>(0);

  const handleLoginDialog = (value: boolean) => () => {
    if (value) {
      dispatch(loginDialogOpen());
    } else {
      dispatch(loginDialogClose());
    }
  };

  const handleJoinDialog = (value: boolean) => () => {
    if (value) {
      dispatch(joinDialogOpen());
    } else {
      dispatch(joinDialogClose());
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
      onClick: handleJoinDialog(true),
    },
    {
      label: '고객센터',
      onClick: onMenuClick('/purchase'),
    },
  ];

  const handleLogin = (value: boolean) => () => {
    if (value) {
      dispatch(setLogin());
    } else {
      dispatch(setLogout());
      // router.reload();
    }
  };

  useEffect(() => {
    getUserInfo().then((res) => {
      if (res.status.type === 'success') {
        dispatch(
          setUserInfo({
            email: res.data.email,
            username: res.data.username,
          })
        );
        dispatch(setLogin());
      } else {
        console.log(res.status.message);
      }
    });
    getCartList().then((res: CartListType) => {
      if (res.status.type === 'success') {
        setCartCount(res.data.cart_items?.length);
      }
    });
  }, []);

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
                router?.pathname.includes(value.url)
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
          {!loginData.login ? (
            userMenu.map((value, index) => (
              <div
                style={{ display: 'flex', alignItems: 'center' }}
                key={`header_right_menu_typo_${index}`}
              >
                {index != 0 && <Styled.RightMenuDivBar />}
                <Styled.RightMenuTypo onClick={value.onClick}>
                  {value.label}
                </Styled.RightMenuTypo>
              </div>
            ))
          ) : (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Styled.RightMenuTypo onClick={handleLogin(false)}>
                {' '}
                <Styled.RightMenuTypoPoint>
                  {loginData.email}
                </Styled.RightMenuTypoPoint>{' '}
                님
              </Styled.RightMenuTypo>
              <Styled.RightMenuDivBar />
              <Badge
                badgeContent={cartCount}
                color="secondary"
                showZero
                onClick={onMenuClick('/purchase')}
              >
                <Styled.ShoppingCart />
              </Badge>
              <Styled.RightMenuDivBar />
              <Styled.RightMenuTypo
                style={{ fontFamily: 'NotoSans-Medium' }}
                onClick={onMenuClick('/service')}
              >
                고객센터
              </Styled.RightMenuTypo>
            </div>
          )}
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
          onClick={onMenuClick('/contents/search')}
        >
          <SearchBar />
        </Styled.SearchBarWrapper>
      </Styled.BannerContainer>
      <LoginDialog />
      <JoinDialog />
    </Styled.Root>
  );
};

export const MHeader = () => {
  return <div>2</div>;
};
