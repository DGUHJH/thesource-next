import React from 'react';
import * as Styled from './styled';

const MenuList = [
  {
    label: '회사소개',
    url: '',
  },
  {
    label: '채용',
    url: '',
  },
  {
    label: '언론/미디어',
    url: '',
  },
  {
    label: '이용약관',
    url: '',
  },
  {
    label: '개인정보 보호방침',
    url: '',
  },
  {
    label: '저작권 정책',
    url: '',
  },
];

export const Footer = () => {
  return (
    <Styled.Root>
      <Styled.MenuContainer>
        {MenuList.map((value, index) => (
          <Styled.MenuTypo key={`footer_menu_typo_${index}`}>
            {value.label}
          </Styled.MenuTypo>
        ))}
      </Styled.MenuContainer>
      <Styled.InfoContainer>
        <Styled.InfoTypo>
          메이커스디 서울 중구 세종대로 14 그랜드센트럴 5층 504호 대표자명
          주현석 개인정보 관리 책임자 주현석 <br />
          사업자 등록번호 452-61-00314 통신판매업신고 제2019-서울중구-2199호
          저작권 대리 중개업 신고 신고 제 1398호 <br />
          대표전화 070-8065-3304 이메일 contact@makersthe.com
          <br />
          <br />
          메이커스디의 사전 서면동의 없이 본 사이드의 일체의 정보, 콘텐츠 및 UI
          등을 상업적 목적으로 전재, 전송, 스크래핑 등 무단으로 사용할 수
          없습니다. <br />
          Copyright@메이커스디 All right reserved.
        </Styled.InfoTypo>
      </Styled.InfoContainer>
    </Styled.Root>
  );
};

export const MFooter = () => {
  return <div>2</div>;
};
