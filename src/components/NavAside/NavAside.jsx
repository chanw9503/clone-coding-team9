import React, { useState } from 'react';
import styled from 'styled-components';
import { COLOR } from '../../shared/color';
import BookMark from '../BookMark/BookMark';
import ChatIcon from '../ChatIcon/ChatIcon';
import LikeIcon from '../LikeIcon/LikeIcon';
import usePutLike from '../../hooks/usePutLike';
import { useParams } from 'react-router-dom';

function NavAside(props) {
  const [clickLike, setClickLike] = useState(false);
  const [likesCount, setLikesCount] = useState('');

  const mutation = usePutLike();
  const { id } = useParams();

  const ClickLikeHandler = () => {
    mutation.mutate(id, {
      onSuccess: (config) => {
        console.log('config', config);
        if (config.data.message === '게시글 좋아요를 취소하였습니다.') {
          setLikesCount(config.data.likesCount);
          setClickLike(false);
        } else if (config.data.message === '게시글 좋아요를 등록하였습니다.') {
          setLikesCount(config.data.likesCount);
          setClickLike(true);
        }
      },
    });
  };
  return (
    <StyldWrap>
      {clickLike ? (
        <StyledCircleBlock onClick={ClickLikeHandler}>
          <LikeIcon fill={COLOR.blue} stroke={COLOR.blue} />
        </StyledCircleBlock>
      ) : (
        <StyledCircleBlock onClick={ClickLikeHandler}>
          <LikeIcon />
        </StyledCircleBlock>
      )}

      <StyledCountBlock>{props.likesCount}</StyledCountBlock>
      <StyledCircleBlock>
        <BookMark />
      </StyledCircleBlock>
      <StyledCountBlock>123</StyledCountBlock>
      <StyledCircleBlock>
        <ChatIcon />
      </StyledCircleBlock>
      <StyledCountBlock>123</StyledCountBlock>
    </StyldWrap>
  );
}

export default NavAside;

const StyldWrap = styled.div`
  position: fixed;
  top: 110px;
  right: 50px;
  z-index: 100px;
  width: 150px;
  height: 500px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledCircleBlock = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  box-shadow: rgba(63, 71, 77, 0.15) 0px 2px 6px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;

  background-color: white;
`;

const StyledCountBlock = styled.div`
  width: 100px;
  margin-top: 10px;
  margin-bottom: 30px;
  text-align: center;
`;
