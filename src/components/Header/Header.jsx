import React from 'react';
import { useNavigate } from 'react-router-dom';
import LogoType from '../LogoType/LogoType';
import Navigation from '../Navigation';
import { TfiAngleDown } from 'react-icons/tfi';

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
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <StyledContainer>
        <StyledBoardBlock>
          <StyledItemBlock>
            <StyledFlexBlock>
              <LogoType />
            </StyledFlexBlock>
            <StyledFlexBlock>
              <StyledLoginBlock onClick={() => navigate('/login')} borderLight={true}>
                로그인
              </StyledLoginBlock>
              <StyledLoginBlock onClick={() => navigate('/signup')}>
                회원가입
              </StyledLoginBlock>
              <StyledWritingButton>
                <span
                  style={{ fontSize: '12px', lineHeight: 18, verticalAlign: 'middle' }}
                >
                  글쓰기
                </span>
                <span
                  style={{ fontSize: '15px', lineHeight: 1, verticalAlign: 'middle' }}
                >
                  <TfiAngleDown />
                </span>
              </StyledWritingButton>
            </StyledFlexBlock>
          </StyledItemBlock>
        </StyledBoardBlock>
      </StyledContainer>
      <Navigation />
    </StyledHeader>
  );
}

export default Header;
