import React, { useState } from 'react';
import { COLOR } from '../../shared/color';
import usePutLike from '../../hooks/usePutLike';
import {
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
} from './styles';
import LikeIcon from '../LikeIcon/LikeIcon';
import ChatIcon from '../ChatIcon/ChatIcon';
import BookMark from '../BookMark/BookMark';
import { useNavigate } from 'react-router-dom';

function Card({ data }) {
  const navigate = useNavigate();
  const [isLike, setLike] = useState(false);
  const [bookMark, setBookMark] = useState(false);
  const mutation = usePutLike();
  console.log(data);
  return (
    <StyledCardBlock>
      <StyledArticle>
        <div>
          <StyledCardItems>
            <StyledUserImageBox>
              <StyleduserImage src={data.boards[0].img} />
            </StyledUserImageBox>
            <StyledAddress>
              <div>
                <StyledNickNameSpan>{data.nickname}</StyledNickNameSpan>
                <span
                  style={{
                    lineHeight: '19px',
                    verticalAlign: 'center',
                    fontSize: '13px',
                  }}
                >
                  •
                </span>
                <StyledFollowButton>팔로우</StyledFollowButton>
              </div>
              <div>
                <StyledProfileSpan>프로필 부연설명</StyledProfileSpan>
              </div>
            </StyledAddress>
          </StyledCardItems>
          <StyledContent>
            <StyledImageBox onClick={() => navigate(`/Detail/${data.postId}`)}>
              <StyledPostImage src={data.boards[0].img} />
            </StyledImageBox>
            <StyledBtnBox>
              <StyledButton
                onClick={() => {
                  setLike(!isLike);
                  mutation.mutate(data.postId);
                }}
              >
                {isLike ? (
                  <LikeIcon fill={COLOR.buttonBlue} stroke={COLOR.buttonBlue} />
                ) : (
                  <LikeIcon />
                  //<BsHeart style={{ fontSize: '25px' }} />
                )}
                <span style={{ verticalAlign: 'center', fontSize: '12px' }}>
                  {data.likesCount}
                </span>
              </StyledButton>
              <StyledButton
                onClick={() => {
                  setBookMark(!bookMark);
                }}
              >
                {bookMark ? (
                  <BookMark fill={COLOR.buttonBlue} stroke={COLOR.buttonBlue} />
                ) : (
                  <BookMark />
                )}
                <span style={{ verticalAlign: 'center', fontSize: '12px' }}>13</span>
              </StyledButton>
              <StyledButton>
                <ChatIcon />
                <span style={{ verticalAlign: 'center', fontSize: '12px' }}>
                  {data.commentsCount}
                </span>
              </StyledButton>
            </StyledBtnBox>
            {data.boards[0].content.length >= 80 ? (
              <StyledCommentbox onClick={() => navigate(`/Detail/${data.postId}`)}>
                {data.boards[0].content.slice(0, 80) + '...'}
              </StyledCommentbox>
            ) : (
              <StyledCommentbox onClick={() => navigate(`/Detail/${data.postId}`)}>
                {data.boards[0].content}
              </StyledCommentbox>
            )}
          </StyledContent>
        </div>
      </StyledArticle>
    </StyledCardBlock>
  );
}

export default Card;
