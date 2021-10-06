import { Box, Typography } from '@material-ui/core';
import {
  BookmarkBorder,
  FavoriteBorder,
  ShoppingCart,
  VisibilityOutlined,
} from '@material-ui/icons';
import styled from 'styled-components';

export const Root = styled(Box)`
  width: 435px;
  height: 480px;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-right: 20px;
  cursor: pointer;
`;

export const ImageWrapper = styled(Box)`
  width: 100%;
  height: 425px;
  border-radius: 6px;
  position: absolute;
  top: 0;
  z-index: 0;
  overflow: hidden;
`;

export const EventContainer = styled(Box)`
  width: 100%;
  height: 425px;
  border-radius: 5px;
  background: #0003;
  padding: 14px 15px;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const EventTopContainer = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EventTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Bold;
    font-size: 18px;
    color: white;
  }
`;

export const EventBottomContainer = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 327px;
`;

export const EventShoppingCart = styled(ShoppingCart)`
  &&& {
    font-size: 28px;
    color: white;
    z-index: 2;
  }
`;

export const EventBottomItemContainer = styled(Box)`
  width: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EventHeart = styled(FavoriteBorder)`
  &&& {
    font-size: 28px;
    color: white;
  }
`;

export const EventBookmark = styled(BookmarkBorder)`
  &&& {
    font-size: 28px;
    color: white;
  }
`;

export const InfoContainer = styled(Box)`
  width: 100%;
  height: 47px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: absolute;
  bottom: 0;
`;

export const InfoTypoContainer = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const TitleTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Bold;
    font-size: 15px;
    color: #191919;
  }
`;

export const AuthorTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Light;
    font-size: 10px;
    color: #191919;
  }
`;

export const InfoItemContainer = styled(Box)`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const EventHeart2 = styled(FavoriteBorder)`
  &&& {
    font-size: 22px;
    margin-right: 2px;
  }
`;

export const ItemTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Light;
    font-size: 10px;
    color: #191919;
  }
`;

export const EventEyes = styled(VisibilityOutlined)`
  &&& {
    font-size: 22px;
    margin-left: 10px;
    margin-right: 2px;
  }
`;
