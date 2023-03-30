import React, { useState } from 'react';
import Header from '../../components/Header';
import DropBox from '../../components/DropBox';
import { StyledWrap, StyledContainer, StyledSortListBox } from './styles';
import { nanoid } from 'nanoid';
import { useGetDropBox } from '../../hooks/useGetDropBox';
import styled from 'styled-components';
import useGetMainBoard from '../../hooks/useGetMainBoard';
import Card from '../../components/Card';
import useDropBox from '../../hooks/useDropBox';

function Main() {
  const SORT_LIST = [
    { id: nanoid(), name: '추천순' },
    { id: nanoid(), name: '인기순' },
    { id: nanoid(), name: '기타순' },
    { id: nanoid(), name: '몰라순' },
  ];

  const HOME_LIST = [
    { id: nanoid(), name: '아마트' },
    { id: nanoid(), name: '빌라/연립' },
  ];

  const dropboxProps1 = useDropBox({ title: '정렬', list: SORT_LIST });
  const dropboxProps2 = useDropBox({ title: '주거형태', list: HOME_LIST });

  const { data, isLoading } = useGetMainBoard();

  console.log(data);

  return (
    <>
      <Header />
      <StyledWrap>
        <StyledContainer>
          <StyledSortListBox>
            <DropBox {...dropboxProps1} />
            <DropBox {...dropboxProps2} />
          </StyledSortListBox>
          <StyledBody>
            {data?.posts.map((item) => {
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
