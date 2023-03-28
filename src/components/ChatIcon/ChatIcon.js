import React from 'react';
import styled from 'styled-components';

function ChatIcon(props) {
  return (
    <StyledSVG fill={props.fill} stroke={props.stroke}>
      <path
        fill="currentColor"
        fillRule="nonzero"
        d="M13.665 18.434l.53-.066C19.69 17.679 23 14.348 23 10c0-4.942-4.235-8.5-11-8.5S1 5.058 1 10c0 4.348 3.31 7.68 8.804 8.368l.531.066L12 21.764l1.665-3.33zm-3.985.926C3.493 18.585 0 14.69 0 10 0 4.753 4.373.5 12 .5S24 4.753 24 10c0 4.69-3.493 8.585-9.68 9.36l-1.647 3.293c-.374.75-.974.744-1.346 0L9.68 19.36z"
      ></path>
    </StyledSVG>
  );
}

export default ChatIcon;

const StyledSVG = styled.svg`
  width: 24px;
  height: 24px;
  stroke-width: 0.1px;

  fill: ${(props) => (props.fill ? props.fill : 'none')};
  stroke: ${(props) => (props.stroke ? props.stroke : 'currentColor')};
`;
