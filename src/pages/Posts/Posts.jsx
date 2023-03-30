/*
 * 작성자 : 태윤희
 * 작성 날짜 : 23-03-27
 * 작성 목적 : 회원가입구현
 */

import React, { useEffect, useRef } from 'react';
import {
  StCategory,
  StCommentForm,
  StCommentWrap,
  StCommnetInnerSelect,
  StContainer,
  StContentInner,
  StContentOut,
  StContentsWrap,
  StHeader,
  StIput,
  StPostBtn,
  StPostForm,
  StSeletWrap,
  StSendImage,
  StSendImageWrap,
  StTagWrap,
  StWrap,
  StyledFlex,
  StyledImage,
  Styledli,
  StyledOl,
  StyledPaddingBlock,
} from './styles';
import LogoType from '../../components/LogoType/LogoType';
import Navi from './Navi/Navi';
import Select from '../../components/Select/Select';
import { useState } from 'react';
import Tag from '../../components/HashTag/Tag';
import ImageUpload from '../../components/ImageUpload/ImageUpload';
import usePostBoard from '../../hooks/usePostBoard';
import {
  sizeOptions,
  stlyeOptions,
  lifeTypeOptions,
  spaceOptions,
} from '../../shared/options';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addBoards, addContents, initState } from '../../redux/Modules/boardSlice';
import { uploadFile } from '../../utils/upload';
import { useNavigate } from 'react-router-dom';

function Posts() {
  const navigate = useNavigate();
  const [houseType, setHouseype] = useState({
    size: '',
    style: '',
    lifeType: '',
  });

  const boardsRef = useRef([
    {
      space: '',
      content: '',
      tags: [],
    },
  ]);

  const data = useSelector((state) => state.boards.boards);
  const contents = useSelector((state) => state.boards.contents);

  useEffect(() => {
    boardsRef.current = contents;
  }, []);

  const dispatch = useDispatch();

  const changeInputHandler = (e, name) => {
    const value = e;
    setHouseype((old) => {
      return { ...old, [name]: value };
    });
  };

  const changeContentHandler = (e, index) => {
    const value = e.target.value;

    const newBoard = [...boardsRef.current];
    newBoard[index] = { ...newBoard[index], content: value };
    boardsRef.current = newBoard;
  };

  const changeSelectHandler = (e, index) => {
    const value = e;
    const newBoard = [...boardsRef.current];
    newBoard[index] = { ...newBoard[index], space: value };
    boardsRef.current = newBoard;
  };

  const getUrl = async (file) => {
    const s3Location = await uploadFile(file); //URL로 받기

    const newBoard = {
      img: s3Location,
      space: '',
      content: '',
      tags: [],
    };
    dispatch(addContents(boardsRef.current));
    dispatch(addBoards(newBoard));
  };

  const addImageHandler = (e) => {
    e.preventDefault();

    getUrl(e.target.files[0]);
  };

  const mutation = usePostBoard();

  const submitAddBoard = (e) => {
    const newBoards = data.map((item, index) => {
      const temp = [...boardsRef.current];

      const tags = temp[index]?.tags?.reduce((acc, cur) => {
        return (acc += '#' + cur.hashtag);
      }, '');

      const newBoard = {
        img: item.img,
        content: temp[index].content,
        space: temp[index].space,
        tags: tags,
      };

      return newBoard;
    });

    const posts = {
      size: houseType.size,
      style: houseType.style,
      lifeType: houseType.lifeType,
      boards: newBoards,
    };

    console.log(posts);
    mutation.mutate(posts);
    dispatch(initState());
    navigate('/');
  };

  console.log('data------', data);
  return (
    <StWrap>
      <StHeader>
        <LogoType onClick={() => navigate('/')} />
        <StPostBtn onClick={submitAddBoard}>올리기</StPostBtn>
      </StHeader>
      <StCategory />
      <Navi />
      <StPostForm>
        <StSeletWrap>
          <StContainer>
            <StIput>
              <Select
                color="#bdbdbd"
                name="size"
                defaultValue="평수"
                options={sizeOptions}
                value={houseType.size}
                onChange={(e) => changeInputHandler(e, 'size')}
              />
            </StIput>
            <StIput>
              <Select
                color="#bdbdbd"
                name="style"
                defaultValue="주거형태"
                options={stlyeOptions}
                value={houseType.style}
                onChange={(e) => changeInputHandler(e, 'style')}
              />
            </StIput>
            <StIput>
              <Select
                color="#bdbdbd"
                name="lifeType"
                defaultValue="스타일"
                options={lifeTypeOptions}
                value={houseType.lifeType}
                onChange={(e) => changeInputHandler(e, 'lifeType')}
              />
            </StIput>
          </StContainer>
        </StSeletWrap>
        <StContentsWrap>
          <StContentOut>
            <StContentInner>
              <StyledOl>
                {data?.map((item, index) => {
                  return (
                    <StyledPaddingBlock key={nanoid()}>
                      <Styledli>
                        <StyledFlex>
                          <StSendImageWrap>
                            {data[0]?.img === '' ? (
                              <ImageUpload boardsRef={boardsRef} index={index} />
                            ) : (
                              <StyledImage src={item.img} />
                            )}
                          </StSendImageWrap>
                          <StCommentWrap>
                            <StCommnetInnerSelect>
                              <Select
                                value={contents[index]?.space}
                                name="space"
                                defaultValue="공간(필수)"
                                options={spaceOptions}
                                onChange={(e) => changeSelectHandler(e, index)}
                              />
                            </StCommnetInnerSelect>
                            <StCommentForm
                              name="description"
                              placeholder={contents[index]?.content}
                              onChange={(e) => changeContentHandler(e, index)}
                              rows="6"
                            />
                            <StTagWrap>
                              <Tag
                                value={contents[index]?.tags}
                                boardsRef={boardsRef}
                                index={index}
                              />
                            </StTagWrap>
                          </StCommentWrap>
                        </StyledFlex>
                      </Styledli>
                    </StyledPaddingBlock>
                  );
                })}
              </StyledOl>
              {data[0]?.img !== '' && (
                <>
                  <StSendImage>
                    추가하기
                    <input
                      type="file"
                      accept="image/*"
                      hidden
                      onChange={addImageHandler}
                    />
                  </StSendImage>
                </>
              )}
            </StContentInner>
          </StContentOut>
        </StContentsWrap>
      </StPostForm>
    </StWrap>
  );
}

export default Posts;
