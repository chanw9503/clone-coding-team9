import React from 'react';
import Header from '../../components/Header';
import styled from 'styled-components';
import NavAside from '../../components/NavAside';
import useGetDetailBoard from '../../hooks/useGetDetailBoard';
import { COLOR } from '../../shared/color';
import { useParams } from 'react-router-dom';

function Detail() {
  const { id } = useParams();
  console.log(id);
  const { data, isLoading } = useGetDetailBoard(id);

  console.log(data);
  return (
    <>
      <Header />
      <NavAside />
      <StyledWrap>
        <StyledContainer>
          <StyledMarginBlock>
            {data?.boards?.map((item) => {
              return (
                <>
                  <img src={item.img} />
                  <StyledContentBlock>{item.content}</StyledContentBlock>
                  <StyledTagBox>
                    {item.tags?.map((tag) => {
                      return <div>{tag}</div>;
                    })}
                  </StyledTagBox>
                </>
              );
            })}
          </StyledMarginBlock>
        </StyledContainer>
      </StyledWrap>
    </>
  );
}

export default Detail;

const StyledContentBlock = styled.div`
  color: rgb(47, 52, 56);
  margin: 24px 0px;
`;

const StyledMarginBlock = styled.div`
  margin-top: 50px;
  z-index: 100;
`;

const StyledTagBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 0 0 16px;
  font-size: 16px;

  color: ${COLOR.tagBlue};
`;

const StyledContainer = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 720px;
`;

const StyledWrap = styled.div`
  width: 100%;
  flex: 1;
`;
