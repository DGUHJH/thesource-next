import { useRouter } from 'next/dist/client/router';
import React from 'react';
import * as Styled from './styled';

export const CommunityMenuContainer = () => {
  const router = useRouter();

  const onClick = (value: string) => () => {
    router.push(value);
  };

  return (
    <Styled.Root>
      <Styled.TitleTypo>커뮤니티</Styled.TitleTypo>
      <Styled.MenuTypo
        onClick={onClick('/community/manual')}
        style={
          router.pathname === '/community/manual'
            ? { color: '#4EA5FC', marginTop: '20px' }
            : { marginTop: '20px' }
        }
      >
        사용 매뉴얼
      </Styled.MenuTypo>
      <Styled.MenuTypo
        onClick={onClick('/community/price-policy')}
        style={
          router.pathname === '/community/price-policy'
            ? { color: '#4EA5FC' }
            : {}
        }
      >
        가격정책
      </Styled.MenuTypo>
      <Styled.MenuTypo
        onClick={onClick('/community/faq')}
        style={router.pathname === '/community/faq' ? { color: '#4EA5FC' } : {}}
      >
        FAQ
      </Styled.MenuTypo>
    </Styled.Root>
  );
};
