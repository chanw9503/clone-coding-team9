import styled from 'styled-components';

const StyledWrap = styled.div`
  width: 100%;
  height: 100vh;
`;

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 1136px;

  width: calc(100% - 120px);
  height: 100vh;

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

const StyledSortListBox = styled.div`
  padding: 10px 0;
  display: flex;

  gap: 5px;
`;

export { StyledWrap, StyledContainer, StyledSortListBox };
