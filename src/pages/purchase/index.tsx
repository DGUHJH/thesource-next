import { delCart, getCartList } from 'api/cart/fetch';
import { preparePurchase, purchaseComplete } from 'api/purchase/fetch';
import check from 'assets/images/icon_check.png';
import equal from 'assets/images/purchase_equal.png';
import minus from 'assets/images/purchase_minus.png';
import sampleCardImage from 'assets/images/sample_card_image.png';
import { BreadCrumbs } from 'components/BreadCrumbs';
import { ProcessContainer } from 'components/Container/Process/index';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import * as Styled from 'styles/purchase/styled';
import { CartItem, CartListType, CartType } from 'types/cart';
import { formatNumber } from 'utils/default';

const Main = () => {
  return (
    <Styled.Root>
      <Head>
        <title>디소스/장바구니</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <BrowserView>
        <Pc />
      </BrowserView>
      <MobileView>
        <Mobile />
      </MobileView>
    </Styled.Root>
  );
};

type PurchaseProps = {
  amount: number;
  name: string;
  buyerName?: string;
  buyerTel?: string;
  buyerEmail: string;
  cart: string[];
  cartId: string;
  checked: boolean;
};

const Pc = () => {
  const router = useRouter();
  const [step, setStep] = useState<number>(0);
  const [selectedContentsId, setSelectedContentsId] = useState<string[]>([]);

  useEffect(() => {}, []);

  return (
    <div>
      <BreadCrumbs content={['홈', '장바구니']} type="small" />
      <Styled.BodyContainer>
        <Styled.LeftContainer>
          <Styled.MenuContainer>
            <Styled.MenuTitleTypo>상품구매</Styled.MenuTitleTypo>
            <Styled.MenuItemTypo style={{ marginTop: '20px' }}>
              <Styled.MenuItemTypoPoint>주문 관리</Styled.MenuItemTypoPoint>
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
          {step === 0 && (
            <Step1
              selectedContentsId={selectedContentsId}
              setSelectedContentsId={setSelectedContentsId}
              onNextStep={() => setStep((prev) => prev + 1)}
            />
          )}
          {step === 1 && (
            <Step2
              selectedContentsId={selectedContentsId}
              onNextStep={() => setStep((prev) => prev + 1)}
              onPrevStep={() => setStep((prev) => prev - 1)}
            />
          )}
          {step === 2 && (
            <Step3 onNextStep={() => setStep((prev) => prev + 1)} />
          )}
        </Styled.RightContainer>
      </Styled.BodyContainer>
    </div>
  );
};

type StepProps = {
  onNextStep: () => void;
  onPrevStep?: () => void;
};

const Step3: React.FC<StepProps> = ({ onNextStep }) => {
  return (
    <div>
      <Styled.CheckContainer>
        <Styled.CheckImgWrapper>
          <Image src={check} layout="fill" />
        </Styled.CheckImgWrapper>
        <Styled.CheckTypo>
          결제가 <Styled.CheckTypoPoint>완료</Styled.CheckTypoPoint>
          되었습니다.
        </Styled.CheckTypo>
        <Styled.CheckNumberTypo>주문번호 : W129493792</Styled.CheckNumberTypo>
      </Styled.CheckContainer>
      <Styled.PurchaseInfoContainer>
        <Styled.PurchaseInfoTitleTypo>결제 정보</Styled.PurchaseInfoTitleTypo>
        <Styled.PurchaseInfoContentContainer>
          <Styled.PurchaseInfoRowContainer>
            <Styled.PurchaseInfoContentMenuTypo>
              결제일자
            </Styled.PurchaseInfoContentMenuTypo>
            <Styled.PurchaseInfoContentTypo>
              2021.09.08
            </Styled.PurchaseInfoContentTypo>
          </Styled.PurchaseInfoRowContainer>
          <Styled.PurchaseInfoRowContainer>
            <Styled.PurchaseInfoContentMenuTypo>
              결제금액
            </Styled.PurchaseInfoContentMenuTypo>
            <Styled.PurchaseInfoContentNumberTypo>
              1,000원
            </Styled.PurchaseInfoContentNumberTypo>
          </Styled.PurchaseInfoRowContainer>
        </Styled.PurchaseInfoContentContainer>
      </Styled.PurchaseInfoContainer>
      <Styled.PurchaseContentsContainer>
        <Styled.PurchaseContentsTitleContainer>
          <Styled.PurchaseContentsTitleTypo>
            결제상품
          </Styled.PurchaseContentsTitleTypo>
        </Styled.PurchaseContentsTitleContainer>
        <Styled.PurchaseContentsCardContainer>
          <Styled.PurchaseContentsCardThumbnailWrapper />
          <Styled.PurchaseContentsRightContainer>
            <Styled.PurchaseContentsCardTypo>
              [단품구매] 백사장에 누워있는 불가사리 <br />
              <Styled.PurchaseContentsCardTypoInfo>
                JPG, 7960 x 4912, 598KB
              </Styled.PurchaseContentsCardTypoInfo>
            </Styled.PurchaseContentsCardTypo>
            <Styled.PurchaseContentsCardButton>
              <Styled.PurchaseContentsCardButtonTypo>
                다운로드
              </Styled.PurchaseContentsCardButtonTypo>
            </Styled.PurchaseContentsCardButton>
          </Styled.PurchaseContentsRightContainer>
        </Styled.PurchaseContentsCardContainer>
        <Styled.PurchaseContentsCardContainer>
          <Styled.PurchaseContentsCardThumbnailWrapper />
          <Styled.PurchaseContentsRightContainer>
            <Styled.PurchaseContentsCardTypo>
              [단품구매] 백사장에 누워있는 불가사리 <br />
              <Styled.PurchaseContentsCardTypoInfo>
                JPG, 7960 x 4912, 598KB
              </Styled.PurchaseContentsCardTypoInfo>
            </Styled.PurchaseContentsCardTypo>
            <Styled.PurchaseContentsCardButton>
              <Styled.PurchaseContentsCardButtonTypo>
                다운로드
              </Styled.PurchaseContentsCardButtonTypo>
            </Styled.PurchaseContentsCardButton>
          </Styled.PurchaseContentsRightContainer>
        </Styled.PurchaseContentsCardContainer>
      </Styled.PurchaseContentsContainer>
      <Styled.PurchaseContentsInfoTypo>
        다운로드는 [마이페이지] {`->`} [구매 콘텐츠 내역] 에서 다운로드
        가능합니다.
      </Styled.PurchaseContentsInfoTypo>
    </div>
  );
};

type StepTwoProps = { selectedContentsId: string[] } & StepProps;

const Step2 = ({
  onNextStep,
  onPrevStep,
  selectedContentsId,
}: StepTwoProps) => {
  const [cartData, setCartData] = useState<CartType>({
    id: '',
    cart_items: [],
  });
  const [allPrice, setAllPrice] = useState<number>(0);
  const [agreement, setAgreement] = useState<boolean>(false);
  const [allGoodsname, setAllGoodsname] = useState<string>('');

  useEffect(() => {
    getCartList().then((res: CartListType) => {
      if (res.status.type === 'success') {
        setCartData(res.data);
        let price = 0;
        let goodsname = '';
        res.data.cart_items.forEach((value: CartItem, index: number) => {
          if (selectedContentsId.includes(value.id)) {
            price += value.price;
            goodsname += value.content_title;
            if (index !== 0) {
              goodsname += ',';
            }
          }
        });
        setAllGoodsname(goodsname);
        setAllPrice(price);
      }
    });
  }, []);

  const onPreparePurchase = () => {
    if (agreement) {
      preparePurchase({ cart_items: selectedContentsId }).then((data) => {
        onClickPayment(data?.id);
      });
    } else {
      alert('약관에 동의해주세요.');
    }
  };

  const onClickPayment = (merchant_uid: string) => {
    /* 1. 가맹점 식별하기 */
    const { IMP }: any = window;
    IMP.init('imp29960609');

    /* 2. 결제 데이터 정의하기 */
    const data = {
      pg: 'html5_inicis',
      pay_method: 'card',
      merchant_uid,
      amount: 1000,
      name: allGoodsname,
      buyer_name: '황재형',
      buyer_tel: '01031204914',
      buyer_email: 'ghkdwogud852@gmail.com',
      buyer_addr: '',
      buyer_postcode: '',
    };
    IMP.request_pay(data, callback);
  };

  const callback = (response: any) => {
    const { success, error_msg, merchant_uid, imp_uid, paid_amount } = response;

    if (success) {
      alert('결제 성공');
      const data = {
        imp_uid,
        merchant_uid,
        amount: paid_amount,
        cart: cartData?.id,
      };

      purchaseComplete(data).then((res) => {
        console.log(res);
      });
    } else {
      alert(`결제 실패: ${error_msg}`);
    }
  };

  return (
    <div>
      <Styled.PriceContainer>
        <Styled.PriceTypo>총 주문금액</Styled.PriceTypo>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Styled.PriceNumberTypo>
          {formatNumber(allPrice)}
        </Styled.PriceNumberTypo>
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
        <Styled.PriceNumberTypoPoint>
          {formatNumber(allPrice)}
        </Styled.PriceNumberTypoPoint>
        &nbsp;
        <Styled.PriceTypo>
          {' '}
          <Styled.PriceTypoPoint> 원 </Styled.PriceTypoPoint>{' '}
        </Styled.PriceTypo>
      </Styled.PriceContainer>
      <Styled.AgreeContainer>
        <Styled.AgreeCheckbox
          color="default"
          checked={agreement}
          onChange={(e) => setAgreement(e.target.checked)}
        />
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
                {formatNumber(allPrice)}
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
            <Styled.PurchaseTableBody>
              <Styled.PurchaseTableBodyTypo>
                카드결제
              </Styled.PurchaseTableBodyTypo>
            </Styled.PurchaseTableBody>
          </Styled.PurchaseTableRow>
          {/* <Styled.PurchaseTableRow
            style={{ borderBottom: '1px #c9c9c9 solid' }}
          >
            <Styled.PurchaseTableHeader>
              <Styled.PurchaseTableHeaderTypo>
                세금계산서 발행여부
              </Styled.PurchaseTableHeaderTypo>
            </Styled.PurchaseTableHeader>
            <Styled.PurchaseTableBody>
              <Styled.PurchaseTableBodyTypo>
                세금계산서 발행
              </Styled.PurchaseTableBodyTypo>
            </Styled.PurchaseTableBody>
          </Styled.PurchaseTableRow> */}
        </Styled.PurchaseTable>
      </Styled.PurchaseContainer>
      <Styled.ButtonBody>
        <Styled.ButtonContainer>
          <Styled.CancelButton onClick={onPrevStep}>
            <Styled.CancelButtonTypo>취소</Styled.CancelButtonTypo>
          </Styled.CancelButton>
          <Styled.PurchaseButton onClick={onPreparePurchase}>
            <Styled.PurchaseButtonTypo>결제하기</Styled.PurchaseButtonTypo>
          </Styled.PurchaseButton>
        </Styled.ButtonContainer>
      </Styled.ButtonBody>
    </div>
  );
};

type StepOneType = {
  selectedContentsId: string[];
  setSelectedContentsId: React.Dispatch<React.SetStateAction<string[]>>;
} & StepProps;

const Step1 = ({
  onNextStep,
  selectedContentsId,
  setSelectedContentsId,
}: StepOneType) => {
  const [data, setData] = useState<CartType>();
  const [allPrice, setAllPrice] = useState<number>(0);
  const [select, setSelect] = useState<boolean[]>([]);
  const router = useRouter();

  useEffect(() => {
    getCartList().then((res: CartListType) => {
      if (res.status.type === 'success') {
        setData(res.data);
        let price = 0;
        let newSelect: boolean[] = [];
        res.data.cart_items.forEach((value: CartItem) => {
          price += value.price;
          newSelect.push(false);
        });
        setAllPrice(price);
        setSelect(newSelect);
      }
    });
  }, []);

  useEffect(() => {
    const selectedContentsId: string[] = [];
    data?.cart_items.forEach((value: CartItem, index: number) => {
      select[index] && selectedContentsId.push(value.id);
    });
    setSelectedContentsId(selectedContentsId);
  }, [select]);

  const onCheckboxClick = (id: number) => () => {
    setSelect((prev) =>
      prev.map((value: boolean, index: number) =>
        index === id ? !value : value
      )
    );
  };

  const onDeleteButtonClick = () => {
    delCart({ ids: selectedContentsId }).then((res) => router.reload());
  };

  const onPurchaseButtonClick = () => {
    if (selectedContentsId.length !== 0) {
      onNextStep();
    } else {
      alert('콘텐츠를 선택해주세요.');
    }
  };

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
        {data?.cart_items?.map((cartItem: CartItem, index: number) => (
          <Styled.ContentsBodyContainer
            key={`contents_body_container_${index}`}
          >
            <Styled.ContentsBodyLeftContainer>
              <Styled.ContentsBodyCheckbox
                color="default"
                checked={select[index] ?? false}
                onChange={onCheckboxClick(index)}
              />
              <Styled.ContentsBodyThumbnailImageWrapper>
                <Image
                  src={cartItem.thumbnail ?? sampleCardImage}
                  layout="fill"
                />
              </Styled.ContentsBodyThumbnailImageWrapper>
              <Styled.ContentsBodyTypoContainer>
                <Styled.ContentsBodyTypo>
                  {cartItem.content_title}
                </Styled.ContentsBodyTypo>
                <Styled.ContentsBodyInfoTypo>
                  {cartItem.file_extension}
                </Styled.ContentsBodyInfoTypo>
              </Styled.ContentsBodyTypoContainer>
            </Styled.ContentsBodyLeftContainer>
            <Styled.ContentsBodyRightContainer>
              <Styled.ContentsBodyPriceNumberTypo>
                {cartItem.price}
              </Styled.ContentsBodyPriceNumberTypo>
              &nbsp;
              <Styled.ContentsBodyPriceTypo>원</Styled.ContentsBodyPriceTypo>
            </Styled.ContentsBodyRightContainer>
          </Styled.ContentsBodyContainer>
        ))}
      </Styled.ContentsContainer>
      <Styled.PriceContainer>
        <Styled.PriceTypo>총 주문금액</Styled.PriceTypo>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Styled.PriceNumberTypo>
          {formatNumber(allPrice)}
        </Styled.PriceNumberTypo>
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
        <Styled.PriceNumberTypoPoint>
          {formatNumber(allPrice)}
        </Styled.PriceNumberTypoPoint>
        &nbsp;
        <Styled.PriceTypo>원</Styled.PriceTypo>
      </Styled.PriceContainer>
      <Styled.ButtonBody>
        <Styled.ButtonContainer>
          <Styled.ContentsAddButton onClick={onDeleteButtonClick}>
            <Styled.ContentsAddButtonTypo>
              선택상품 삭제하기
            </Styled.ContentsAddButtonTypo>
          </Styled.ContentsAddButton>
          <Styled.PurchaseButton onClick={onPurchaseButtonClick}>
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
