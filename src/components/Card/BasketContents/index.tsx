import sample from 'assets/images/sample.png';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import React from 'react';
import * as Styled from './styled';

type Props = {
  id: string;
  content_type: string;
  thumbnail: string;
};

export const BasketContentsCard: React.FC<Props> = ({
  thumbnail,
  content_type,
  id,
}) => {
  const router = useRouter();
  const onClick = () => {
    router.push(`/contents/${content_type}/details/?id=${id}`);
  };

  return (
    <Styled.Root onClick={onClick}>
      <Image src={thumbnail ?? sample} width="200px" height="128px" />
    </Styled.Root>
  );
};
