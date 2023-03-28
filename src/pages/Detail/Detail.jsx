import React from 'react';
import Header from '../../components/Header';
import styled from 'styled-components';
import NavAside from '../../components/NavAside';
import useGetDetailBoard from '../../hooks/useGetDetailBoard';

function Detail() {
  const { data, isLoading } = useGetDetailBoard();

  console.log(data);
  return (
    <>
      <Header />
      <NavAside />
      <StyledWrap>
        <StyledContainer>
          {data?.boards?.map((item) => {
            console.log('item', item);

            return (
              <>
                <div>
                  {item.tags?.map((tag) => {
                    return <div>{tag}</div>;
                  })}
                </div>
                <img src={item.img} />
                <div>{item.content}</div>
              </>
            );
          })}
        </StyledContainer>
      </StyledWrap>
    </>
  );
}

export default Detail;

const StyledWrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: green;
`;

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 720px;
  height: 100vh;
  background-color: tomato;
`;
