import {
  Box,
  Button,
  Checkbox,
  Container,
  Typography,
} from '@material-ui/core';
import styled from 'styled-components';

export const Root = styled(Box)``;

export const BodyContainer = styled(Container)`
  &&& {
    width: 100%;
    display: flex;
    padding: 0;
  }
`;

export const LeftContainer = styled(Box)`
  width: 210px;
  display: flex;
  flex-direction: column;
`;

export const MenuContainer = styled(Box)`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  box-sizing: border-box;
  border: 1px #999 solid;
`;

export const MenuTitleTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Regular;
    font-size: 18px;
    color: #444;
    margin-top: 45px;
  }
`;

export const MenuItemTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Regular;
    font-size: 14px;
    color: #999;
    margin-bottom: 5px;
  }
`;

export const MenuItemTypoPoint = styled.span`
  &&& {
    color: #444;
  }
`;

export const RightContainer = styled(Box)`
  width: 910px;
  display: flex;
  flex-direction: column;
  margin-left: 42px;
`;

export const TitleTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Bold;
    font-size: 24px;
    color: #4b4b4b;
    margin-top: 40px;
  }
`;

export const ContentsContainer = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-top: 1px #444 solid;
  margin-top: 60px;
`;

export const ContentsHeaderContainer = styled(Box)`
  width: 100%;
  height: 43px;
  background: #f1f1f1;
  display: flex;
`;

export const ContentsHeaderLeftContainer = styled(Box)`
  width: 748px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentHeaderTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Medium;
    font-size: 12px;
    color: #555;
  }
`;

export const ContentsHeaderRightContainer = styled(Box)`
  width: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px #e9e9e9 solid;
`;

export const ContentsBodyContainer = styled(Box)`
  width: 100%;
  height: 135px;
  display: flex;
  border-top: 1px #e9e9e9 solid;
  border-bottom: 1px #d9d9d9 solid;
`;

export const ContentsBodyLeftContainer = styled(Box)`
  width: 748px;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const ContentsBodyCheckbox = styled(Checkbox)`
  &&& {
    margin-left: 20px;
  }
`;

export const ContentsBodyThumbnailImageWrapper = styled(Box)`
  width: 120px;
  height: 108px;
  margin-left: 20px;
  position: relative;
`;

export const ContentsBodyTypoContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-left: 45px;
`;

export const ContentsBodyTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Regular;
    font-size: 12px;
    color: #444;
  }
`;

export const ContentsBodyInfoTypo = styled(Typography)`
  &&& {
    font-family: Roboto;
    font-weight: 300;
    font-size: 12px;
    color: #555;
  }
`;

export const ContentsBodyRightContainer = styled(Box)`
  width: 160px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px #e9e9e9 solid;
`;

export const ContentsBodyPriceNumberTypo = styled(Typography)`
  &&& {
    font-family: Roboto;
    font-weight: 400;
    font-size: 14px;
    color: #4ea5fc;
    margin-top: 5px;
  }
`;

export const ContentsBodyPriceTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Regular;
    font-size: 12px;
    color: #4ea5fc;
  }
`;

export const PriceContainer = styled(Box)`
  width: 100%;
  height: 80px;
  border: 1px #444 solid;
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PriceImageWrapper = styled(Box)`
  width: 30px;
  height: 30px;
  position: relative;
  margin: 0 40px;
`;

export const PriceTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Medium;
    font-size: 12px;
    color: #444;
  }
`;

export const PriceTypoPoint = styled.span`
  &&& {
    font-family: NotoSans-Medium;
    font-size: 18px;
    color: #4ea5fc;
  }
`;

export const PriceNumberTypo = styled(Typography)`
  &&& {
    font-family: Roboto;
    font-weight: 400;
    font-size: 14px;
    color: #444;
    margin-top: 4px;
  }
`;

export const PriceNumberTypoPoint = styled.span`
  &&& {
    font-family: NotoSans-Medium;
    font-size: 18px;
    color: #4ea5fc;
  }
`;

export const ButtonBody = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 80px;
`;

export const ButtonContainer = styled(Box)`
  width: 468px;
  display: flex;
  justify-content: space-between;
`;

export const ContentsAddButton = styled(Button)`
  &&& {
    width: 225px;
    height: 58px;
    border: 1px #e9e9e9 solid;
    border-radius: 3px;
  }
`;

export const ContentsAddButtonTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Light;
    font-size: 16px;
    color: #676767;
  }
`;

export const PurchaseButton = styled(Button)`
  &&& {
    width: 225px;
    height: 58px;
    border: 1px #4ea5fc solid;
    border-radius: 3px;
  }
`;

export const PurchaseButtonTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Medium;
    font-size: 16px;
    color: #4ea5fc;
  }
`;

export const AgreeContainer = styled(Box)`
  width: 100%;
  height: 46px;
  background: #f1f1f1;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  margin-top: 80px;
`;

export const AgreeCheckbox = styled(Checkbox)``;

export const AgreeTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Light;
    font-size: 12px;
    color: #555;
  }
`;

export const PurchaseContainer = styled(Box)`
  width: 100%;
  height: 156px;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

export const PurchaseTitleTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Medium;
    font-size: 16px;
    color: #4b4b4b;
  }
`;

export const PurchaseTable = styled(Box)`
  width: 100%;
  margin-top: 5px;
  border-top: 1px #444 solid;
`;

export const PurchaseTableRow = styled(Box)`
  width: 100%;
  height: 41px;
  border-bottom: 1px #e9e9e9 solid;
  display: flex;
`;

export const PurchaseTableHeader = styled(Box)`
  width: 192px;
  height: 100%;
  background: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PurchaseTableHeaderTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Medium;
    font-size: 12px;
    color: #555;
  }
`;

export const PurchaseTableBody = styled(Box)`
  width: 718px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
`;

export const PurchaseTableBodyTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Light;
    font-size: 12px;
    color: #555;
  }
`;

export const CancelButton = styled(Button)`
  &&& {
    width: 225px;
    height: 58px;
    border: 1px #e9e9e9 solid;
    border-radius: 3px;
  }
`;

export const CancelButtonTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Light;
    font-size: 16px;
    color: #676767;
  }
`;
