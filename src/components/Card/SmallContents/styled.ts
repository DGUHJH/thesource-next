import { Box, Typography } from '@material-ui/core';
import {
  BookmarkBorder,
  FavoriteBorder,
  ShoppingCart,
} from '@material-ui/icons';
import styled from 'styled-components';

export const Root = styled(Box)`
  width: 277px;
  height: 244px;
  border-radius: 5px;
  background: #f003;
  margin-right: 20px;
  position: relative;
  cursor: pointer;
`;

export const SampleImage = styled(Box)`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  overflow: hidden;
`;

export const EventContainer = styled(Box)`
  width: 100%;
  height: 100%;
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
  margin-top: 150px;
`;

export const EventShoppingCart = styled(ShoppingCart)`
  &&& {
    font-size: 18px;
    color: white;
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
