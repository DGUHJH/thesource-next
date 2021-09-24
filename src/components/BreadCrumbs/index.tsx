import React from 'react';
import * as Styled from './styled';

type Props = {
  content: string[];
  type?: 'default' | 'small';
};

export const BreadCrumbs: React.FC<Props> = ({ content, type }) => {
  return (
    <Styled.Root>
      <Styled.TypoContainer type={type}>
        {content.map((value, index) => (
          <Styled.Typo key={`bread_crumbs_${index}`}>
            {index != 0 && <>&nbsp;&nbsp;{'>'}&nbsp;&nbsp;</>} {value}
          </Styled.Typo>
        ))}
      </Styled.TypoContainer>
    </Styled.Root>
  );
};

export const MBreadCrumbs = () => {
  return <Styled.MRoot />;
};
