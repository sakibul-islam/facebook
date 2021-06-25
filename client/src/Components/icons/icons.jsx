import styled, { css } from 'styled-components';
import icons2 from './icons2.png';
import icons1 from './icons1.png';
import icons3 from './icons3.png';
import icons6 from './icons6.png';
import icons7 from './icons7.png';
import icons8 from './icons8.png';
import icons9 from './icons9.png';
import gunIcon from './pistol.png';

const icons2Styles = css`
  width: 18px;
  height: 18px;
  background-image: url(${icons2});
  filter: invert(0.39) sepia(0.12);
`;
const icons1Styles = css`
  height: 24px;
  width: 24px;
  background-image: url(${icons1});
`;

const icons3Styles = css`
  height: 18px;
  width: 18px;
  background-image: url(${icons3});
`;
const icons6Styles = css`
  height: 20px;
  width: 20px;
  background-image: url(${icons6});
`;
const icons7Styles = css`
  height: 20px;
  width: 20px;
  background-image: url(${icons7});
`;
const icons8Styles = css`
  height: 20px;
  width: 20px;
  background-image: url(${icons8});
`;
const icons9Styles = css`
  height: 20px;
  width: 20px;
  background-image: url(${icons9});
`;

export const LikeIcon = styled.i`
  ${icons2Styles}
  background-position: 0 -172px;
`;

export const LikedIcon = styled.i`
  ${icons2Styles}
  background-position: 0 -153px;
  filter: invert(0.39) sepia(0.57) saturate(2) saturate(2) saturate(2) saturate(2) saturate(2) saturate(1.4775) hue-rotate(202deg) brightness(0.97) contrast(0.96);
`;

export const CommentIcon = styled.i`
  ${icons2Styles}
  background-position: 0 -134px;
`;

export const ShareIcon = styled.i`
  ${icons2Styles}
  background-position: 0 -190px;
`;

export const ThreeDotsIcon = styled.i`
  ${icons2Styles}
  background-position: 0 -50px;
`;



export const LiveVideoIcon = styled.i`
  ${icons1Styles}
  background-position: 0 190px;
`;

export const PhotoVideoIcon = styled.i`
  ${icons1Styles}
  background-position: 0 114px;
`;

export const FeelingActivityIcon = styled.i`
  ${icons1Styles}
  background-position: 0 164px;
`;

export const CrossIcon = styled.i`
  ${icons3Styles}
  background-position: 1px 74px;
`;
export const PlusIcon = styled.i`
  ${icons3Styles}
  background-position: -1px 132px;
`;
export const EarthIcon = styled.i`
  ${icons3Styles}
  height: 14px;
  width: 14px;
  background-position: -183px 27px;
`;
export const SendIcon = styled.i`
  ${icons6Styles}
  background-position: -20px 21px;
  filter: invert(0.39) sepia(0.12);
`;

//for menu dropdown
export const LogOutIcon = styled.i`
  ${icons7Styles}
  background-position: 0 399px;
`;

export const DarkModeIcon = styled.i`
  ${icons7Styles}
  background-position: 0 294px;
`;

export const GunIcon = styled.i`
  width: 20px;
  height: 20px;
  background-image: url(${gunIcon});
  background-size: cover;
`;

export const HelpSupportIcon = styled.i`
  ${icons7Styles}
  background-position: 0 210px;
`;

export const SignInIcon = styled.i`
  ${icons7Styles}
  background-position: 0 168px;
`;

export const SettingIcon = styled.i`
  ${icons9Styles}
  background-position: 1px 20px;
  background-size: 37px;
`;


  //for pages
export const MessageIcon = styled.i`
  ${icons8Styles}
  background-position: 0 205px;
`;
export const NotificationIcon = styled.i`
  ${icons8Styles}
  background-position: 0 105px;
`;
export const PromotionIcon = styled.i`
  ${icons8Styles}
  background-position: 0 41px;
`;

