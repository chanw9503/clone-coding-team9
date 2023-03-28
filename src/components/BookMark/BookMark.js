import React from 'react';
import styled from 'styled-components';

function BookMark(props) {
  return (
    <StyledSVG fill={props.fill} stroke={props.stroke}>
      <path d="M11.53 18.54l-8.06 4.31A1 1 0 0 1 2 21.97V3.5A1.5 1.5 0 0 1 3.5 2h17A1.5 1.5 0 0 1 22 3.5v18.47a1 1 0 0 1-1.47.88l-8.06-4.31a1 1 0 0 0-.94 0z"></path>
    </StyledSVG>
  );
}

export default BookMark;

const StyledSVG = styled.svg`
  width: 24px;
  height: 24px;
  stroke-width: 1px;

  fill: ${(props) => (props.fill ? props.fill : 'none')};
  stroke: ${(props) => (props.stroke ? props.stroke : 'currentColor')};
`;
