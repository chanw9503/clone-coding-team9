import styled, { css } from 'styled-components';
import { COLOR } from '../../shared/color';

const StyledContent = styled.div`
  color: rgba(0, 0, 0, 0.7);
  &:hover {
    color: rgba(0, 0, 0, 0.35);
  }
`;

const StyledCardBlock = styled.div`
  background-color: white;
  width: 260px;
  height: 450px;
  padding: 0 8px;
  padding-top: 10px;
  padding-bottom: 100px;
  overflow: hidden;
`;

const StyledCardItems = styled.div`
  display: flex;
  gap: 10px;
`;

const StyledArticle = styled.article``;

const StyledAddress = styled.address``;

const StyledImageBox = styled.div`
  width: inherit;
  height: 270px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  overflow: hidden;
`;

const StyledUserImageBox = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
`;

const StyleduserImage = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;

  src: ${(props) => (props.src ? props.src : null)};
`;
const StyledNickNameSpan = styled.span`
  font-size: 15px;
  font-weight: 500;
`;

const StyledProfileSpan = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.5);
`;

const StyledBtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
`;

const StyledCommentbox = styled.div`
  margin-top: 10px;
  font-weight: 400;
  font-size: 15px;
  font-family: OhouseSans, Noto Sans KR, Apple SD Gothic Neo, ë§‘ì€ ê³ ë”•, Malgun Gothic,
    sans-serif;
`;

const StyledButton = styled.button`
  background: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  opacity: 1;
  :hover {
    opacity: 0.3;
  }
`;

const StyledFollowButton = styled.button`
  font-size: 16px;
  background: none;
  border: none;
  padding: 0;
  font-weight: 600;
  color: ${COLOR.buttonBlue};
  opacity: 1;
  &:hover {
    opacity: 0.6;
  }
`;

const StyledPostImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;

  &:hover {
    transition: transform 0.5s;
    transform: scale(1.1);
    overflow: hidden;
  }
  src: ${(props) => (props.src ? props.src : null)};
`;

export {
  StyledContent,
  StyledCardBlock,
  StyledCardItems,
  StyledArticle,
  StyledAddress,
  StyledImageBox,
  StyledUserImageBox,
  StyleduserImage,
  StyledNickNameSpan,
  StyledBtnBox,
  StyledCommentbox,
  StyledButton,
  StyledFollowButton,
  StyledPostImage,
  StyledProfileSpan,
};
