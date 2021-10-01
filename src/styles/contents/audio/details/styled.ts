import { Box, Button, Container, Typography } from '@material-ui/core';
import { FavoriteBorder, VisibilityOutlined } from '@material-ui/icons';
import styled from 'styled-components';

export const Root = styled(Box)``;

export const ContentContainer = styled(Container)`
  &&& {
    padding: 0;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
  }
`;

export const LeftContainer = styled(Box)`
  width: 900px;
  display: flex;
  flex-direction: column;
`;

export const ThumbnailWrapper = styled(Box)`
  width: 900px;
  border-radius: 8px;
  overflow: hidden;
`;

export const OtherContentsContainer = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

export const OtherContentsTitleTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Medium;
    font-size: 14px;
    color: #2b2b2b;
  }
`;

export const OtherContentsCardContainer = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const TagContainer = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

export const TagTitleTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Regular;
    font-size: 16px;
    color: #2b2b2b;
    margin-left: 18px;
  }
`;

export const TagChipContainer = styled(Box)`
  width: 100%;
  display: flex;
  margin-top: 10px;
  margin-bottom: 40px;
`;

export const TagChip = styled(Box)`
  height: 40px;
  border-radius: 20px;
  border: 1px #e9e9e9 solid;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 7px;
  padding: 10px 18px;
`;

export const TagChipTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Light;
    font-size: 14px;
    color: #444;
  }
`;

export const RightContainer = styled(Box)`
  width: 300px;
  display: flex;
  flex-direction: column;
`;

export const TitleTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Medium;
    font-size: 24px;
    color: #1b1b1b;
  }
`;

export const ProfileContainer = styled(Box)`
  height: 32px;
  display: flex;
  align-items: center;
  margin-top: 12px;
`;

export const ProfileImgSample = styled(Box)`
  width: 32px;
  height: 32px;
  background: #c4c4c4;
  border-radius: 16px;
`;

export const ProfileTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Regular;
    font-size: 18px;
    color: #000;
    margin-left: 11px;
  }
`;

export const InfoContainer = styled(Box)`
  display: flex;
  align-items: center;
  margin-top: 50px;
`;

export const InfoHeart = styled(FavoriteBorder)`
  &&& {
    font-size: 20px;
    margin-left: 5px;
  }
`;

export const InfoEyes = styled(VisibilityOutlined)`
  &&& {
    font-size: 20px;
    margin-left: 20px;
  }
`;

export const InfoTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Light;
    font-size: 12px;
    color: #676767;
    margin-left: 5px;
  }
`;

export const ContentInfoTable = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

export const ContentInfoContainer = styled(Box)`
  width: 100%;
  display: flex;
`;

export const ContentInfoHeaderContainer = styled(Box)`
  width: 120px;
  height: 41px;
  background: #e9e9e9;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px #e9e9e9 solid;
  border-top: 0;
  border-bottom: 1px #fff solid;
`;

export const ContentInfoBodyContainer = styled(Box)`
  width: 180px;
  height: 41px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px #e9e9e9 solid;
  border-top: 0;
  border-left: 0;
`;

export const ContentInfoTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Regular;
    font-size: 12px;
    color: #676767;
  }
`;

export const DownloadButtonContainer = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
`;

export const WhiteButton = styled(Button)`
  &&& {
    width: 150px;
    height: 44px;
    background: #fff;
    border-radius: 0;
    border: 1px #e9e9e9 solid;
  }
`;

export const WhiteButtonTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Regular;
    font-size: 14px;
    color: #676767;
  }
`;

export const BlueButton = styled(Button)`
  &&& {
    width: 150px;
    height: 44px;
    background: #4ea5fc;
    border-radius: 0;
  }
`;

export const BlueButtonTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Bold;
    font-size: 14px;
    color: #fff;
  }
`;

export const ContentNumberContainer = styled(Box)`
  width: 100%;
  display: flex;
  margin-top: 40px;
`;

export const ContentNumberHeaderContainer = styled(Box)`
  width: 120px;
  height: 41px;
  background: #e9e9e9;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px #e9e9e9 solid;
`;

export const ContentNumberBodyContainer = styled(Box)`
  width: 180px;
  height: 41px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border: 1px #e9e9e9 solid;
  padding: 0 15px;
  box-sizing: border-box;
`;

export const ContentNumberTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Regular;
    font-size: 12px;
    color: #676767;
  }
`;

export const ContentNumberTypoPoint = styled.span`
  &&& {
    font-family: NotoSans-Regular;
    font-size: 14px;
    color: #2b2b2b;
  }
`;

export const LicenseContainer = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

export const LicenseTitleTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Regular;
    font-size: 16px;
    color: #2b2b2b;
    font-weight: 500;
  }
`;

export const LicenseContentContainer = styled(Box)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
`;

export const LicenseContentTypo = styled(Typography)`
  &&& {
    width: 50%;
    font-family: NotoSans-Regular;
    font-size: 12px;
    color: #999;
    font-weight: 400;
    margin-bottom: 8px;
  }
`;

export const BannerImage = styled(Box)`
  width: 100%;
  height: 104px;
  margin-top: 20px;
  position: relative;
`;
