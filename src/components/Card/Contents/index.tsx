import sampleCardImage from 'assets/images/sample_card_image.png';
import Image from 'next/image';
import React, { useState } from 'react';
import * as Styled from './styled';

export const ContentsCard = () => {
  const [mouseOver, setMouseOver] = useState(false);

  const handleMouseOver = (value: boolean) => () => {
    setMouseOver(value);
  };
  return (
    <Styled.Root
      onMouseEnter={handleMouseOver(true)}
      onMouseLeave={handleMouseOver(false)}
    >
      <Styled.ImageWrapper>
        <Image src={sampleCardImage} layout="fill" />
      </Styled.ImageWrapper>
      {mouseOver && (
        <Styled.EventContainer>
          <Styled.EventTopContainer>
            <Styled.EventTypo>영상효과</Styled.EventTypo>
            <Styled.EventShoppingCart />
          </Styled.EventTopContainer>
          <Styled.EventBottomContainer>
            <Styled.EventTypo>#로고 #애니메이션</Styled.EventTypo>
            <Styled.EventBottomItemContainer>
              <Styled.EventHeart />
              <Styled.EventBookmark />
            </Styled.EventBottomItemContainer>
          </Styled.EventBottomContainer>
        </Styled.EventContainer>
      )}
      <Styled.InfoContainer>
        <Styled.InfoTypoContainer>
          <Styled.TitleTypo>노을지는 해변가</Styled.TitleTypo>
          <Styled.AuthorTypo>홍길동</Styled.AuthorTypo>
        </Styled.InfoTypoContainer>
        <Styled.InfoItemContainer>
          <Styled.EventHeart2 />
          <Styled.ItemTypo>42</Styled.ItemTypo>
          <Styled.EventEyes />
          <Styled.ItemTypo>125</Styled.ItemTypo>
        </Styled.InfoItemContainer>
      </Styled.InfoContainer>
    </Styled.Root>
  );
};
