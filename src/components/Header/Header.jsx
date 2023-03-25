import React from 'react';
import LogoType from '../LogoType/LogoType';
import {
  StyledHeader,
  StyledContainer,
  StyledBoardBlock,
  StyledItemBlock,
  StyledFlexBlock,
  StyledLoginBlock,
  StyledWritingButton,
} from './styles';

function Header() {
  return (
    <StyledHeader>
      <StyledContainer>
        <StyledBoardBlock>
          <StyledItemBlock>
            <StyledFlexBlock>
              <LogoType />
            </StyledFlexBlock>
            <StyledFlexBlock>
              <StyledLoginBlock>로그인</StyledLoginBlock>
              <StyledLoginBlock>회원가입</StyledLoginBlock>
              <StyledWritingButton>글쓰기</StyledWritingButton>
            </StyledFlexBlock>
          </StyledItemBlock>
        </StyledBoardBlock>
      </StyledContainer>
    </StyledHeader>
  );
}

export default Header;

/**
 * flex: 0 0 auto;
 * 1 item : flex 컨테이너 내에서 늘어나는(flex-grow) 비율  "0" 은 늘어나지 않는것을 의밎
 * 2 item : flex 컨테이너 내에서 축소(shirk)되는 비율을 나타나며, "0"은 축소되지 않는 것을 의미
 * 3 item : 아이템의 초기 크기, "auto" 는 컨테이너의 가능한 최대 크기까지 아이템이 늘어날 수 있다는 것을 의미
 */
