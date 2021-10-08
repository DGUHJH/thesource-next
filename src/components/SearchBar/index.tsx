import { useRouter } from 'next/dist/client/router';
import React, { useState } from 'react';
import * as Styled from './styled';

export const SearchBar = () => {
  const router = useRouter();
  const [searchWord, setSearchWord] = useState<string>('');

  const onEnterKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  const onSubmit = () => {
    router.push(`/contents/search?searchWord=${searchWord}`);
  };

  return (
    <Styled.Root>
      <Styled.MenuContainer>
        <Styled.MenuTypo>전체</Styled.MenuTypo>
      </Styled.MenuContainer>
      <Styled.EditorContainer>
        <Styled.Editor
          placeholder="검색어 입력"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
          onKeyPress={onEnterKeyPress}
        />
      </Styled.EditorContainer>
      <Styled.ButtonContainer onClick={onSubmit}>
        <Styled.ButtonIcon />
      </Styled.ButtonContainer>
    </Styled.Root>
  );
};
