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
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${COLOR.borderGray};
`;

const StyledBoardBlock = styled.div`
  position: fixed;
  z-index: 1102;
  top: 0px;
  max-width: 1136px;
  width: 100%;
  background-color: ${COLOR.white};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin: 0 auto;
    width: calc(100% - 80px);
    max-width: 100%;
    box-sizing: border-box;
    min-height: 1;
  }

  @media screen and (min-width: 1024px) {
    margin: 0 auto;
    width: calc(100% - 120px);
    max-width: 100%;
    box-sizing: border-box;
    min-height: 1;
  }

  @media screen and (min-width: 1256px) {
    margin: 0 auto;
    width: calc(100% - 120px);
    max-width: 100%;
    width: 1136px;
    box-sizing: border-box;
    min-height: 1;
  }
`;

const StyledItemBlock = styled.div`
  height: 80px;
  padding-right: 35px;

  width: 100%;
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
  font-size: 12px;
  line-height: 18px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: auto;
  border-radius: 4px;
  height: 40px;
  padding: 0 20px;
  text-align: center;
  color: ${COLOR.white};
  outline: none;
  overflow: hidden;
  background-color: ${COLOR.buttonBlue};

  &:hover {
    background-color: ${COLOR.hoverDeepBlue};
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
