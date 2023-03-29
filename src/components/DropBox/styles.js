import styled, { css, keyframes } from 'styled-components';
import { COLOR } from '../../shared/color';

const StyledSortButton = styled.button`
  border: none;
  color: ${COLOR.darkGray};
  font-size: 15px;
  border-radius: 5px;
  padding: 8px 12px;
  background-color: ${COLOR.lightGray};
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const Title = styled.div`
  display: flex;
  align-items: flex-start;
  font-size: 15px;
  padding: 8px 6px 8px 0;
  font-weight: 700;
  margin: 0;
`;

const fade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
  `;

const StyledUl = styled.ul`
  position: absolute;
  width: 180px;
  background-color: white;
  border: none;
  ${({ pos }) => `top: ${pos.top + pos.height}px;left: ${pos.left}px;`}
  margin: 0;
  animation: ${fade} 0.2s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 5px;

  &:after {
    content: '';
    height: 0;
    width: 0;
    position: absolute;
    top: -2px;
    left: 0;
    ${({ pos, isCenter }) => {
      if (isCenter) return `left: ${pos.width / 2}px;`;
      return `left: 40px;`;
    }}

    transform: translate(-50%, -50%);
    border-radius: 15px;
    border: 12px solid transparent;
    border-top-width: 0;
    border-bottom-color: white;
  }
`;

const StyledLi = styled.li`
  padding: 10px;
  font-size: 15px;
  line-height: 25px;
  border-radius: 5px;
  color: rgba(0, 0, 0, 0.7);
  font-family: OhouseSans, 'Noto Sans KR', 'Apple SD Gothic Neo', '맑은 고딕',
    'Malgun Gothic', sans-serif;

  :hover {
    background-color: ${COLOR.lightBlue};
  }
`;

export { StyledSortButton, StyledUl, StyledLi, Title };
