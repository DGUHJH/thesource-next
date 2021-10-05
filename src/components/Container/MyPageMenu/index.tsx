import { useRouter } from 'next/dist/client/router';
import React from 'react';
import * as Styled from './styled';

export const MyPageMenuContainer = () => {
  const router = useRouter();

  const onClick = (value: string) => () => {
    router.push(value);
  };

  return (
    <Styled.Root>
      <Styled.TitleTypo>마이페이지</Styled.TitleTypo>
      <Styled.MenuTypo
        onClick={onClick('/mypage/info')}
        style={
          router.pathname === '/mypage/info'
            ? { color: '#4EA5FC', marginTop: '20px' }
            : { marginTop: '20px' }
        }
      >
        내정보
      </Styled.MenuTypo>
      <Styled.MenuTypo
        onClick={onClick('/mypage/contents')}
        style={
          router.pathname === '/mypage/contents' ? { color: '#4EA5FC' } : {}
        }
      >
        콘텐츠 관리
      </Styled.MenuTypo>
      <Styled.MenuTypo
        onClick={onClick('/mypage/payment')}
        style={
          router.pathname === '/mypage/payment' ? { color: '#4EA5FC' } : {}
        }
      >
        결제내역
      </Styled.MenuTypo>
      <Styled.MenuTypo
        onClick={onClick('/mypage/download')}
        style={
          router.pathname === '/mypage/download' ? { color: '#4EA5FC' } : {}
        }
      >
        다운로드 내역
      </Styled.MenuTypo>
      <Styled.MenuTypo
        onClick={onClick('/mypage/modify')}
        style={router.pathname === '/mypage/modify' ? { color: '#4EA5FC' } : {}}
      >
        회원정보 수정
      </Styled.MenuTypo>
      <Styled.MenuTypo
        onClick={onClick('/mypage/withdraw')}
        style={
          router.pathname === '/mypage/withdraw' ? { color: '#4EA5FC' } : {}
        }
      >
        회원탈퇴
      </Styled.MenuTypo>
    </Styled.Root>
  );
};
