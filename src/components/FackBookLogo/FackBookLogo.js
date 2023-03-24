/**
 *
 * 작성자 : 박찬우
 * 목적 : facebook logo 스크럽
 * 날짜 : 2023.03.25
 *
 */

import React from 'react';
import styled from 'styled-components';
function FackBookLogo() {
  return (
    <StyledTagA>
      <svg width="48" height="48" viewBox="0 0 48 48" preserveAspectRatio="xMidYMid meet">
        <g fill="none" fillRule="evenodd">
          <path
            fill="#3B5998"
            d="M0 24C0 10.745 10.745 0 24 0s24 10.745 24 24-10.745 24-24 24S0 37.255 0 24z"
          ></path>
          <path
            fill="#FFF"
            d="M25.77 35V24h3.384v-3.385h-3.385v-2.538c-.012-.756.08-1.285 1.693-1.692h1.692V13h-3.385c-3.25 0-4.52 1.84-4.23 5.077v2.538H19V24h2.538v11h4.231z"
          ></path>
        </g>
      </svg>
    </StyledTagA>
  );
}

export default FackBookLogo;

const StyledTagA = styled.a`
  margin: 0 10px;

  opacity: 1;
  &:hover {
    opacity: 0.7;
  }
`;
