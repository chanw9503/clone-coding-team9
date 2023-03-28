import styled, { css } from 'styled-components';
import { COLOR } from '../../shared/color';

const StyledDropContainer = styled.div`
  padding: 10px 0;
`;

const StyledSortButton = styled.button`
  border: none;
  color: ${COLOR.darkGray};
  font-size: 15px;
  border-radius: 5px;
  padding: 7px 8px 6px;
  background-color: ${COLOR.lightGray};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const StyledDropBox = styled.div`
  visibility: hidden;
  position: absolute;
  top: 190px;

  width: 0;
  height: 0;

  transform: translate(-50%, -20px);
  // transition: opacity 0.3s ease, transform 0.4s ease, visibility 0.1s;
  z-index: 9;

  // 선택한 요소 끝부분에 내용을 추가하는 가상 요소
  &:after {
    content: '';
    height: 0;
    width: 0;
    position: absolute;
    top: 16px;
    left: 25px;

    transform: translate(-50%, -50%);

    //삼각형 추가
    border-radius: 15px;
    border: 12px solid transparent;
    border-top-width: 0;
    border-bottom-color: white;
  }

  ${({ isDropped }) =>
    isDropped &&
    css`
      opacity: 1;
      visibility: visible;
      transform: translate(-50%, 0);
    `};
`;

const StyledUl = styled.ul`
  position: relative;
  width: 180px;
  top: 20px;
  left: -50px;
  display: flex;
  border-radius: 5px;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  list-style-type: none;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const StyledLi = styled.li`
  padding: 10px;
  font-size: 13px;
  line-height: 25px;
  border-radius: 5px;
  font-family: OhouseSans, 'Noto Sans KR', 'Apple SD Gothic Neo', '맑은 고딕',
    'Malgun Gothic', sans-serif;

  :hover {
    background-color: ${COLOR.lightBlue};
  }
`;

export { StyledDropContainer, StyledSortButton, StyledDropBox, StyledUl, StyledLi };
