import React from 'react';
import styled from 'styled-components';
import BookMark from '../BookMark/BookMark';
import ChatIcon from '../ChatIcon/ChatIcon';
import LikeIcon from '../LikeIcon/LikeIcon';

function NavAside() {
  return (
    <StyldWrap>
      <StyledCircleBlock>
        <LikeIcon />
      </StyledCircleBlock>
      <StyledCountBlock>123</StyledCountBlock>
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
