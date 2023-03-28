import React, { useState } from 'react';
import Header from '../../components/Header';
import DropBox from '../../components/DropBox';
import { StyledWrap, StyledContainer, StyledSortListBox } from './styles';
import { nanoid } from 'nanoid';
import { useGetDropBox } from '../../hooks/useGetDropBox';
import styled from 'styled-components';
import useGetMainBoard from '../../hooks/useGetMainBoard';
import Card from '../../components/Card';

function Main() {
  const drop = ['추천순', '인기순', '기타순', '몰라순'];
  const [currentDrop, setCurrentDrop] = useState('');
  const dropList = [drop, drop, drop];

  const { data, isLoading } = useGetMainBoard();

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
          <StyledBody>
            {data?.map((item) => {
              return <Card key={nanoid()} data={item} />;
            })}
          </StyledBody>
        </StyledContainer>
      </StyledWrap>
    </>
  );
}

export default Main;

const StyledBody = styled.div`
  margin-top: 10px;
  padding-bottom: 1000px;
  display: flex;
  flex-wrap: wrap;
`;
