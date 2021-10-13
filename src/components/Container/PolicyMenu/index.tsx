import { useRouter } from 'next/dist/client/router';
import React from 'react';
import * as Styled from './styled';

export const PolicyMenuContainer = () => {
  const router = useRouter();

  const onClick = (value: string) => () => {
    router.push(value);
  };

  return (
    <Styled.Root>
      <Styled.TitleTypo>정책</Styled.TitleTypo>
      <Styled.MenuTypo
        onClick={onClick('/policy/terms')}
        style={
          router.pathname === '/policy/terms'
            ? { color: '#4EA5FC', marginTop: '20px' }
            : { marginTop: '20px' }
        }
      >
        이용약관
      </Styled.MenuTypo>
      <Styled.MenuTypo
        onClick={onClick('/policy/privacy')}
        style={
          router.pathname === '/policy/privacy' ? { color: '#4EA5FC' } : {}
        }
      >
        개인정보 보호방침
      </Styled.MenuTypo>
      <Styled.MenuTypo
        onClick={onClick('/policy/copyright')}
        style={
          router.pathname === '/policy/copyright' ? { color: '#4EA5FC' } : {}
        }
      >
        저작권 정책
      </Styled.MenuTypo>
    </Styled.Root>
  );
};
