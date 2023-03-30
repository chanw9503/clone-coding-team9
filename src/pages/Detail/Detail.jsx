import React from 'react';
import Header from '../../components/Header';
import NavAside from '../../components/NavAside';
import useGetDetailBoard from '../../hooks/useGetDetailBoard';
import { useNavigate, useParams } from 'react-router-dom';
import Comment from '../Comments/Comment';
import { nanoid } from 'nanoid';
import {
  StyledTagListBlock,
  StyledTagsBlock,
  StyledVerLine,
  StyledSubject,
  StyledImage,
  StyledContentBlock,
  StyledMarginBlock,
  StyledTagBox,
  StyledContainer,
  StyledWrap,
} from './styles';
import styled from 'styled-components';
import { COLOR } from '../../shared/color';
import useDeleteBoard from '../../hooks/useDeleteBoard';
import { useDispatch } from 'react-redux';

function Detail() {
  const { id } = useParams();
  const { data } = useGetDetailBoard(id);
  const navigate = useNavigate();
  const mutation = useDeleteBoard();

  const deleteBoardHandler = (e) => {
    e.preventDefault();
    mutation.mutate(id, {
      onSuccess: () => {
        navigate('/');
      },
    });
  };

  return (
    <>
      <Header />
      <NavAside likesCount={data?.post.likesCount} />
      <StyledWrap>
        <StyledContainer>
          <StyledMarginBlock>
            <StyledHeaderBlock>
              <StyledSubject>
                <div>{data?.post.style}</div>
                <StyledVerLine />
                <div>{data?.post.lifeType}</div>
              </StyledSubject>
              <StyledDeleteBlock>
                {data?.post.enable ? (
                  <StyledDeleteButton onClick={deleteBoardHandler}>
                    삭제하기
                  </StyledDeleteButton>
                ) : null}
              </StyledDeleteBlock>
            </StyledHeaderBlock>
            {data?.post.boards.map((item) => {
              return (
                <div key={nanoid()}>
                  <StyledImage src={item.img} />
                  <StyledContentBlock>{item.content}</StyledContentBlock>
                  <StyledTagListBlock>
                    {item.tags?.split('#').map((item) => {
                      if (item !== '')
                        return <StyledTagsBlock key={nanoid()}>#{item}</StyledTagsBlock>;
                    })}
                  </StyledTagListBlock>
                </div>
              );
            })}
          </StyledMarginBlock>
          <Comment />
        </StyledContainer>
      </StyledWrap>
    </>
  );
}

export default Detail;

const StyledDeleteButton = styled.button`
  border: none;
  padding: 10px;
  border-radius: 5px;
  color: white;
  background-color: ${COLOR.buttonBlue};
  margin-left: 10px;
`;
const StyledDeleteBlock = styled.div``;

const StyledHeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;
