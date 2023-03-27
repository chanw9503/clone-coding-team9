import React, { useState } from 'react';
import Header from '../../components/Header';
import DropBox from '../../components/DropBox';
import { StyledWrap, StyledContainer, StyledSortListBox } from './styles';
import { nanoid } from 'nanoid';
import { useGetDropBox } from '../../hooks/useGetDropBox';
import styled from 'styled-components';
import useGetMainBoard from '../../hooks/useGetMainBoard';

function Main() {
  const drop = ['추천순', '인기순', '기타순', '몰라순'];
  const [currentDrop, setCurrentDrop] = useState('');
  const dropList = [drop, drop, drop];
  console.log(currentDrop);

  const { data, isLoading } = useGetDropBox();
  const { board } = useGetMainBoard();
  console.log(data);

  return (
    <>
      <Header />
      <StyledWrap>
        <StyledContainer>
          <StyledSortListBox>
            {dropList.map((item, index) => {
              const id = nanoid();
              return (
                <DropBox
                  key={id}
                  id={index}
                  onDropList={item}
                  onCurrentDrop={setCurrentDrop}
                />
              );
            })}
          </StyledSortListBox>
          {data?.map((item) => {
            const id = nanoid();
            return <div key={id}>{item.id}</div>;
          })}
          <StyledBody>
            <StyledCardBlock>
              <StyledArticle>
                <StyledCardItems>
                  <div>sada</div>
                  <StyledAddress>
                    <div>
                      <span>닉네임</span>
                    </div>
                    <div>
                      <span>이미지</span>
                      <span>xsadas</span>
                    </div>
                  </StyledAddress>
                </StyledCardItems>
                <StyledImageBox></StyledImageBox>
                <div>
                  <button>좋아요</button>
                  <button>태그</button>
                  <button>댓글</button>
                </div>
              </StyledArticle>
            </StyledCardBlock>
          </StyledBody>
        </StyledContainer>
      </StyledWrap>
    </>
  );
}

export default Main;

const StyledBody = styled.div`
  background-color: blue;
  margin: 0 auto;
`;

const StyledCardBlock = styled.div`
  background-color: white;
  width: 200px;
  height: 200px;
`;

const StyledCardItems = styled.div`
  display: flex;
`;

const StyledArticle = styled.article``;

const StyledAddress = styled.address``;

const StyledImageBox = styled.div`
  width: 200px;
  height: 100px;
  background-color: steelblue;
`;
