import React, { useState } from 'react';
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
  StyledFixBlock,
} from './styles';
import { getCookie, removeCookie } from '../../auth/Cookie';

function Header() {
  const navigate = useNavigate();
  const cookies = getCookie('token');

  const [logout, setLogout] = useState(false);

  const logoutHandler = () => {
    if (window.confirm('로그아웃 하시겠습니까>')) {
      setLogout(true);
      removeCookie('token');
    }
  };

  const loginHandler = () => {
    navigate('/login');
    setLogout(false);
  };

  return (
    <StyledHeader>
      <StyledContainer>
        <StyledFixBlock>
          <StyledBoardBlock>
            <StyledItemBlock>
              <StyledFlexBlock>
                <LogoType onClick={() => navigate('/')} />
              </StyledFlexBlock>
              <StyledFlexBlock>
                {cookies ? (
                  <StyledLoginBlock onClick={logoutHandler} borderLight={true}>
                    로그아웃
                  </StyledLoginBlock>
                ) : (
                  <StyledLoginBlock onClick={loginHandler} borderLight={true}>
                    로그인
                  </StyledLoginBlock>
                )}
                <StyledLoginBlock onClick={() => navigate('/signup')}>
                  회원가입
                </StyledLoginBlock>
                <StyledWritingButton
                  onClick={() => {
                    navigate('/posts');
                  }}
                >
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
        </StyledFixBlock>
      </StyledContainer>
      <Navigation />
    </StyledHeader>
  );
}

export default Header;
