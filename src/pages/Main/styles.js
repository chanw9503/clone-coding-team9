import styled from 'styled-components';

const StyledWrap = styled.div`
  width: 100%;
  height: 100vh;
`;

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  height: 100vh;
  background-color: green;
  padding: 10px 60px;
`;

const StyledSortListBox = styled.div`
  padding: 10px 0;
  background-color: tomato;
  max-width: 1024px;
  margin: 0 auto;
  height: 40px;

  display: flex;
  gap: 5px;
`;

export { StyledWrap, StyledContainer, StyledSortListBox };
