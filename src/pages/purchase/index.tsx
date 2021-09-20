import equal from 'assets/images/purchase_equal.png';
import minus from 'assets/images/purchase_minus.png';
import sampleCardImage from 'assets/images/sample_card_image.png';
import { BreadCrumbs } from 'components/BreadCrumbs';
import { ProcessContainer } from 'components/Container/Process/index';
import Image from 'next/image';
import React, { useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import * as Styled from 'styles/purchase/styled';

const Main = () => {
  return (
    <Styled.Root>
      <BrowserView>
        <Pc />
      </BrowserView>
      <MobileView>
        <Mobile />
      </MobileView>
    </Styled.Root>
  );
};

const Pc = () => {
  const [step, setStep] = useState<number>(0);
  const onClick = () => {
    setStep((prev) => prev + 1);
  };

  return (
    <div onClick={onClick}>
      <BreadCrumbs content={['홈', '장바구니']} type="small" />

      <Styled.BodyContainer>
        <Styled.LeftContainer>
          <Styled.MenuContainer>
            <Styled.MenuTitleTypo>상품구매</Styled.MenuTitleTypo>
            <Styled.MenuItemTypo style={{ marginTop: '20px' }}>
              {' '}
              <Styled.MenuItemTypoPoint>
                {' '}
                주문 관리{' '}
              </Styled.MenuItemTypoPoint>{' '}
            </Styled.MenuItemTypo>
            <Styled.MenuItemTypo> 장바구니 </Styled.MenuItemTypo>
            <Styled.MenuItemTypo> 라이선스 안내 </Styled.MenuItemTypo>
            <Styled.MenuItemTypo> 결제안내 </Styled.MenuItemTypo>
            <Styled.MenuItemTypo> 환불안내 </Styled.MenuItemTypo>
          </Styled.MenuContainer>
        </Styled.LeftContainer>
        <Styled.RightContainer>
          <Styled.TitleTypo>장바구니</Styled.TitleTypo>
          <ProcessContainer step={step} />
          {step === 0 && <Step1 />}
          {step === 1 && <Step2 />}
        </Styled.RightContainer>
      </Styled.BodyContainer>
    </div>
  );
};

const Step2 = () => {
  return (
    <div>
      <Styled.PriceContainer>
        <Styled.PriceTypo>총 주문금액</Styled.PriceTypo>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Styled.PriceNumberTypo>1,000</Styled.PriceNumberTypo>
        &nbsp;
        <Styled.PriceTypo>원</Styled.PriceTypo>
        <Styled.PriceImageWrapper>
          <Image src={minus} layout="fill" />
        </Styled.PriceImageWrapper>
        <Styled.PriceTypo>총 할인금액</Styled.PriceTypo>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Styled.PriceNumberTypo>0</Styled.PriceNumberTypo>
        &nbsp;
        <Styled.PriceTypo>원</Styled.PriceTypo>
        <Styled.PriceImageWrapper>
          <Image src={equal} layout="fill" />
        </Styled.PriceImageWrapper>
        <Styled.PriceTypo>총 결제금액</Styled.PriceTypo>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Styled.PriceNumberTypoPoint>1,000</Styled.PriceNumberTypoPoint>
        &nbsp;
        <Styled.PriceTypo>
          {' '}
          <Styled.PriceTypoPoint> 원 </Styled.PriceTypoPoint>{' '}
        </Styled.PriceTypo>
      </Styled.PriceContainer>
      <Styled.AgreeContainer>
        <Styled.AgreeCheckbox color="default" />
        <Styled.AgreeTypo>
          결제내용을 충분히 확인하였으며 결제 진행에 동의합니다.
        </Styled.AgreeTypo>
      </Styled.AgreeContainer>
      <Styled.PurchaseContainer>
        <Styled.PurchaseTitleTypo>결제 정보</Styled.PurchaseTitleTypo>
        <Styled.PurchaseTable>
          <Styled.PurchaseTableRow>
            <Styled.PurchaseTableHeader>
              <Styled.PurchaseTableHeaderTypo>
                총 결제금액
              </Styled.PurchaseTableHeaderTypo>
            </Styled.PurchaseTableHeader>
            <Styled.PurchaseTableBody>
              <Styled.PriceNumberTypoPoint style={{ fontSize: '14px' }}>
                1,000
              </Styled.PriceNumberTypoPoint>
              &nbsp;
              <Styled.PriceTypo>
                {' '}
                <Styled.PriceTypoPoint style={{ fontSize: '14px' }}>
                  {' '}
                  원{' '}
                </Styled.PriceTypoPoint>{' '}
              </Styled.PriceTypo>
            </Styled.PurchaseTableBody>
          </Styled.PurchaseTableRow>

          <Styled.PurchaseTableRow>
            <Styled.PurchaseTableHeader>
              <Styled.PurchaseTableHeaderTypo>
                결제방법
              </Styled.PurchaseTableHeaderTypo>
            </Styled.PurchaseTableHeader>
          </Styled.PurchaseTableRow>

          <Styled.PurchaseTableRow
            style={{ borderBottom: '1px #c9c9c9 solid' }}
          >
            <Styled.PurchaseTableHeader>
              <Styled.PurchaseTableHeaderTypo>
                세금계산서 발행여부
              </Styled.PurchaseTableHeaderTypo>
            </Styled.PurchaseTableHeader>
          </Styled.PurchaseTableRow>
        </Styled.PurchaseTable>
      </Styled.PurchaseContainer>
      <Styled.ButtonBody>
        <Styled.ButtonContainer>
          <Styled.CancelButton>
            <Styled.CancelButtonTypo>취소</Styled.CancelButtonTypo>
          </Styled.CancelButton>
          <Styled.PurchaseButton>
            <Styled.PurchaseButtonTypo>결제하기</Styled.PurchaseButtonTypo>
          </Styled.PurchaseButton>
        </Styled.ButtonContainer>
      </Styled.ButtonBody>
    </div>
  );
};

const Step1 = () => {
  return (
    <div>
      <Styled.ContentsContainer>
        <Styled.ContentsHeaderContainer>
          <Styled.ContentsHeaderLeftContainer>
            <Styled.ContentHeaderTypo>상품</Styled.ContentHeaderTypo>
          </Styled.ContentsHeaderLeftContainer>
          <Styled.ContentsHeaderRightContainer>
            <Styled.ContentHeaderTypo>금액</Styled.ContentHeaderTypo>
          </Styled.ContentsHeaderRightContainer>
        </Styled.ContentsHeaderContainer>
        <Styled.ContentsBodyContainer>
          <Styled.ContentsBodyLeftContainer>
            <Styled.ContentsBodyCheckbox color="default" />
            <Styled.ContentsBodyThumbnailImageWrapper>
              <Image src={sampleCardImage} layout="fill" />
            </Styled.ContentsBodyThumbnailImageWrapper>
            <Styled.ContentsBodyTypoContainer>
              <Styled.ContentsBodyTypo>
                [단품구매] 백사장에 누워있는 불가사리
              </Styled.ContentsBodyTypo>
              <Styled.ContentsBodyInfoTypo>
                JPG, 7960 x 4912, 598KB
              </Styled.ContentsBodyInfoTypo>
            </Styled.ContentsBodyTypoContainer>
          </Styled.ContentsBodyLeftContainer>
          <Styled.ContentsBodyRightContainer>
            <Styled.ContentsBodyPriceNumberTypo>
              1,000
            </Styled.ContentsBodyPriceNumberTypo>
            &nbsp;
            <Styled.ContentsBodyPriceTypo>원</Styled.ContentsBodyPriceTypo>
          </Styled.ContentsBodyRightContainer>
        </Styled.ContentsBodyContainer>
      </Styled.ContentsContainer>
      <Styled.PriceContainer>
        <Styled.PriceTypo>총 주문금액</Styled.PriceTypo>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Styled.PriceNumberTypo>1,000</Styled.PriceNumberTypo>
        &nbsp;
        <Styled.PriceTypo>원</Styled.PriceTypo>
        <Styled.PriceImageWrapper>
          <Image src={minus} layout="fill" />
        </Styled.PriceImageWrapper>
        <Styled.PriceTypo>총 할인금액</Styled.PriceTypo>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Styled.PriceNumberTypo>0</Styled.PriceNumberTypo>
        &nbsp;
        <Styled.PriceTypo>원</Styled.PriceTypo>
        <Styled.PriceImageWrapper>
          <Image src={equal} layout="fill" />
        </Styled.PriceImageWrapper>
        <Styled.PriceTypo>총 결제금액</Styled.PriceTypo>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Styled.PriceNumberTypoPoint>1,000</Styled.PriceNumberTypoPoint>
        &nbsp;
        <Styled.PriceTypo>원</Styled.PriceTypo>
      </Styled.PriceContainer>
      <Styled.ButtonBody>
        <Styled.ButtonContainer>
          <Styled.ContentsAddButton>
            <Styled.ContentsAddButtonTypo>
              콘텐츠 추가하기
            </Styled.ContentsAddButtonTypo>
          </Styled.ContentsAddButton>
          <Styled.PurchaseButton>
            <Styled.PurchaseButtonTypo>
              선택상품 구매하기
            </Styled.PurchaseButtonTypo>
          </Styled.PurchaseButton>
        </Styled.ButtonContainer>
      </Styled.ButtonBody>
    </div>
  );
};

const Mobile = () => {
  return <div></div>;
};

export default Main;
