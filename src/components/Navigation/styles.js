import styled, { css } from 'styled-components';
import { COLOR } from '../../shared/color';
const StyledNavBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${COLOR.borderGray};
`;

const StyledNavItemBlock = styled.div`
  height: 60px;
  max-width: 1024px;
  padding: 0px 60px;

  width: 1024px;
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

export { StyledNavBlock, StyledNavItemBlock, StyledNavItem, StyledItemBox };
