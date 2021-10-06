import { inputCart } from 'api/cart/fetch';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import React, { useState } from 'react';
import { ContentType } from 'types/contents';
import * as Styled from './styled';

export const ContentsCard: React.FC<ContentType> = ({
  categories,
  content_type,
  created_at,
  has_download,
  id,
  preview,
  price,
  tags,
  thumbnail,
  title,
}) => {
  const [mouseOver, setMouseOver] = useState(false);
  const router = useRouter();

  const handleMouseOver = (value: boolean) => () => {
    setMouseOver(value);
  };

  const onClick = (value: number) => () => {
    if (value === 0) {
      router.push(`/contents/${content_type}/details/?id=${id}`);
    } else if (value === 1) {
      inputCart({ contents: [id] }).then((res) => {
        if (res.status.type === 'success') {
          alert('장바구니에 담아졌습니다!');
        }
      });
    }
  };

  const contentType = () => {
    if (content_type === 'audio') {
      return '음원소스';
    } else if (content_type === 'effect') {
      return '영상효과';
    } else if (content_type === 'image') {
      return '이미지';
    } else if (content_type === 'video') {
      return '영상클립';
    }
  };

  return (
    <Styled.Root
      onMouseEnter={handleMouseOver(true)}
      onMouseLeave={handleMouseOver(false)}
    >
      <Styled.ImageWrapper>
        <Image src={thumbnail} layout="fill" objectFit="cover" />
      </Styled.ImageWrapper>
      {mouseOver && (
        <Styled.EventContainer onClick={onClick(0)}>
          <Styled.EventTopContainer>
            <Styled.EventTypo>{contentType()}</Styled.EventTypo>
            <Styled.EventShoppingCart onClick={onClick(1)} />
          </Styled.EventTopContainer>
          <Styled.EventBottomContainer>
            <Styled.EventTypo>
              {tags.map((tag, index: number) => (
                <span key={`contents_card_${id}_${index}`}>
                  #{tag.name}&nbsp;
                </span>
              ))}
            </Styled.EventTypo>
            <Styled.EventBottomItemContainer>
              <Styled.EventHeart />
              <Styled.EventBookmark />
            </Styled.EventBottomItemContainer>
          </Styled.EventBottomContainer>
        </Styled.EventContainer>
      )}
      <Styled.InfoContainer>
        <Styled.InfoTypoContainer>
          <Styled.TitleTypo>{title}</Styled.TitleTypo>
          <Styled.AuthorTypo>StudioThe</Styled.AuthorTypo>
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
