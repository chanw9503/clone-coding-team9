import React from 'react';
import styled from 'styled-components';

function LikeIcon(props) {
  return (
    <StyledSVG fill={props.fill} stroke={props.stroke}>
      <path d="M23.22 7.95c.4 4.94-2.92 9.71-10.92 13.85a.47.47 0 0 1-.42 0C3.88 17.66.56 12.9.96 7.93 1.54 2.48 8.28.3 12.1 4.7c3.8-4.4 10.55-2.22 11.13 3.25z"></path>
    </StyledSVG>
  );
}

export default LikeIcon;

const StyledSVG = styled.svg`
  width: 24px;
  height: 24px;
  stroke-width: 1px;

  fill: ${(props) => (props.fill ? props.fill : 'none')};
  stroke: ${(props) => (props.stroke ? props.stroke : 'currentColor')};
`;
