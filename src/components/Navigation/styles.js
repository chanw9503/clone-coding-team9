import styled, { css } from 'styled-components';
import { COLOR } from '../../shared/color';

const StyledWrap = styled.div`
  width: 100%;
  border-bottom: 1px solid ${COLOR.borderGray};
`;

const StyledNavBlock = styled.div`
  width: 100%;
  max-width: 1136px;
  margin: 0 auto;
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

const StyledNavItemBlock = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StyledNavItem = styled.div`
  font-size: 16px;
  line-height: 20px;
  font-weight: 700px;

  font-family: OhouseSans, 'Noto Sans KR', 'Apple SD Gothic Neo', '맑은 고딕',
    'Malgun Gothic', sans-serif;
  &:hover {
    color: ${COLOR.blue};
  }

  cursor: pointer;
`;

const StyledItemBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: inherit;
  cursor: pointer;
  font-size: 16px;
  ${(props) =>
    props.borderColor === true
      ? css`
          border-bottom: 2px solid ${COLOR.blue};
          color: ${COLOR.blue};
          font-weight: 500;
        `
      : ''};
`;

export { StyledWrap, StyledNavBlock, StyledNavItemBlock, StyledNavItem, StyledItemBox };
