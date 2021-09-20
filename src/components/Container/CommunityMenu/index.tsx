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
        style={{ marginTop: '20px' }}
      >
        사용 매뉴얼
      </Styled.MenuTypo>
      <Styled.MenuTypo onClick={onClick('/community/price-policy')}>
        가격정책
      </Styled.MenuTypo>
      <Styled.MenuTypo onClick={onClick('/community/faq')}>FAQ</Styled.MenuTypo>
    </Styled.Root>
  );
};
