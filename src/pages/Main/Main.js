import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import DropBox from '../../components/DropBox';
import { StyledWrap, StyledContainer, StyledSortListBox, StyledBody } from './styles';
import { nanoid } from 'nanoid';
import { useGetDropBox } from '../../hooks/useGetDropBox';
import styled from 'styled-components';
import useGetMainBoard from '../../hooks/useGetMainBoard';
import Card from '../../components/Card';
import useDropBox from '../../hooks/useDropBox';
import { useSelector } from 'react-redux';

function Main() {
  const SORT_LIST = [
    { id: nanoid(), name: '인기순' },
    { id: nanoid(), name: '댓글' },
  ];

  const HOME_LIST = [
    { id: nanoid(), name: '아파트' },
    { id: nanoid(), name: '원룸' },
  ];

  const dropboxProps1 = useDropBox({ title: '정렬', list: SORT_LIST });
  const dropboxProps2 = useDropBox({ title: '주거형태', list: HOME_LIST });
  const url = useSelector((state) => state.boards.data);
  const { data, isLoading } = useGetMainBoard();
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
