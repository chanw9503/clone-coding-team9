/**
 *
 * 작성자 : 박찬우
 * 목적 : naver logo 스크럽
 * 날짜 : 2023.03.25
 *
 */
import React from 'react';
import styled from 'styled-components';

function NaverLogo() {
  return (
    <StyledTagA>
      <svg width="48" height="48" viewBox="0 0 48 48" preserveAspectRatio="xMidYMid meet">
        <g fill="none" fillRule="evenodd">
          <path
            fill="#00C63B"
            d="M0 24C0 10.745 10.745 0 24 0s24 10.745 24 24-10.745 24-24 24S0 37.255 0 24z"
          ></path>
          <path fill="#FFF" d="M21 25.231V34h-7V15h7l6 8.769V15h7v19h-7l-6-8.769z"></path>
        </g>
      </svg>
    </StyledTagA>
  );
}

export default NaverLogo;

const StyledTagA = styled.a`
  margin: 0 10px;
  opacity: 1;
  &:hover {
    opacity: 0.7;
  }
`;
