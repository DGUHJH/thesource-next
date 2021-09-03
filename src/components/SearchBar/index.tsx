import React from 'react';
import * as Styled from './styled';

export const SearchBar = () => {
  return (
    <Styled.Root>
      <Styled.MenuContainer>
        <Styled.MenuTypo>전체</Styled.MenuTypo>
      </Styled.MenuContainer>
      <Styled.EditorContainer>
        <Styled.EditorTypo>이미지 검색 #동물 #식물</Styled.EditorTypo>
      </Styled.EditorContainer>
      <Styled.ButtonContainer>
        <Styled.ButtonIcon />
      </Styled.ButtonContainer>
    </Styled.Root>
  );
};
