import sampleCardImage from 'assets/images/sample_card_image.png';
import Image from 'next/image';
import React from 'react';
import * as Styled from './styled';

export const BasketContentsCard = () => {
  return (
    <Styled.Root>
      <Image src={sampleCardImage} layout="responsive" />
    </Styled.Root>
  );
};
