import sampleCardImage from 'assets/images/sample_card_image.png';
import Image from 'next/image';
import React, { useState } from 'react';
import * as Styled from './styled';

export const SmallContentsCard = () => {
  const [mouseOver, setMouseOver] = useState(false);

  const handleMouseOver = (value: boolean) => () => {
    setMouseOver(value);
  };

  return (
    <Styled.Root
      onMouseEnter={handleMouseOver(true)}
      onMouseLeave={handleMouseOver(false)}
    >
      <Styled.SampleImage>
        <Image src={sampleCardImage} layout="responsive" />
      </Styled.SampleImage>
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
    </Styled.Root>
  );
};
