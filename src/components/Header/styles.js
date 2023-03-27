import styled, { css } from 'styled-components';
import { COLOR } from '../../shared/color';

/**
 * flex: 0 0 auto;
 * 1 item : flex 컨테이너 내에서 늘어나는(flex-grow) 비율  "0" 은 늘어나지 않는것을 의밎
 * 2 item : flex 컨테이너 내에서 축소(shirk)되는 비율을 나타나며, "0"은 축소되지 않는 것을 의미
 * 3 item : 아이템의 초기 크기, "auto" 는 컨테이너의 가능한 최대 크기까지 아이템이 늘어날 수 있다는 것을 의미
 */

const StyledHeader = styled.header`
  flex: 0 0 auto;
  box-sizing: border-box;
  position: relative;
  display: block;
`;

const StyledContainer = styled.div`
  height: 81px;
`;

const StyledBoardBlock = styled.div`
  position: fixed;
  z-index: 1102;
  top: 0px;
  width: 100%;
  background-color: ${COLOR.white};
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${COLOR.borderGray};
`;

const StyledItemBlock = styled.div`
  height: 60px;
  max-width: 1024px;
  padding: 10px 60px;

  width: 1024px;
  display: flex;

  justify-content: space-between;
`;

const StyledFlexBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLoginBlock = styled.div`
  ${(props) =>
    props.borderLight &&
    css`
      border-right: 1px solid ${COLOR.dividerGray};
    `};

  font-size: 14px;
  line-height: 18px;
  padding: 0 10px;
`;

const StyledWritingButton = styled.button`
  border: none;
  background: none;
  font: inherit;
  font-size: 14px;
  line-height: 18px;

  display: inline-block;
  justify-content: center;
  align-items: center;

  width: auto;
  border-radius: 4px;
  height: 40px;
  padding: 0 16px;
  text-align: center;
  color: ${COLOR.white};
  outline: none;
  overflow: hidden;
  background-color: ${COLOR.buttonBlue};

  &:hover {
    background-color: ${COLOR.hoverBlue};
  }
`;

export {
  StyledHeader,
  StyledContainer,
  StyledBoardBlock,
  StyledItemBlock,
  StyledFlexBlock,
  StyledLoginBlock,
  StyledWritingButton,
};
