/*
 * 작성자 : 태윤희
 * 작성 날짜 : 23-03-27
 * 작성 목적 : 회원가입구현
 */

import React from 'react';
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
  StSendImageWrap,
  StTagWrap,
  StWrap,
} from './PostsStyles';
import LogoType from '../../components/LogoType/LogoType';
import Navi from './Navi';
import Select from '../../components/Select/Select';
import { useState } from 'react';
import Tag from '../../components/HashTag/Tag';
import ImageUpload from '../../components/ImageUpload/ImageUpload';
import usePostBoard from '../../hooks/usePostBoard';

function Posts() {
  const [image, setImage] = useState({
    image_file: '',
    preview_URL: '',
  });

  const [houseType, setHouseype] = useState({
    size: '',
    stlye: '',
    lifeType: '',
  });

  const changeInputHandler = (e) => {
    const { value, name } = e.target;
    setHouseype((old) => {
      return { ...old, [name]: value };
    });
  };

  const mutation = usePostBoard();

  const submitAddBoard = (e) => {
    mutation.mutate();
  };

  const sizeOptions = [
    '10평 미만',
    '10평대',
    '20평대',
    '30평대',
    '40평대',
    '50평대 이상',
  ];
  const stlyeOptions = ['원룸&오피스텔', '아파트', '빌라&연립', '단독주택'];
  const lifeTypeOptions = [
    '모던',
    '북유럽',
    '빈티지',
    '내추럴',
    '프로방스&로맨틱',
    '한국&아시아',
    '유니크',
  ];
  const space = [
    '원룸',
    '거실',
    '침실',
    '주방',
    '욕실',
    '아이방',
    '드레스룸',
    '서재&작업실',
    '베란다',
    '가구&소품',
  ];

  return (
    <StWrap>
      <StHeader>
        <LogoType />
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
                onChange={changeInputHandler}
              />
            </StIput>
            <StIput>
              <Select
                color="#bdbdbd"
                name="style"
                defaultValue="주거형태"
                options={stlyeOptions}
                value={houseType.style}
                onChange={changeInputHandler}
              />
            </StIput>
            <StIput>
              <Select
                color="#bdbdbd"
                name="lifeType"
                defaultValue="스타일"
                options={lifeTypeOptions}
                value={houseType.lifeType}
                onChange={changeInputHandler}
              />
            </StIput>
          </StContainer>
        </StSeletWrap>
        <StContentsWrap>
          <StContentOut>
            <StContentInner>
              <StSendImageWrap>
                {<ImageUpload image={image} setImage={setImage} />}
              </StSendImageWrap>
              <StCommentWrap>
                <StCommnetInnerSelect>
                  <Select name="space" defaultValue="공간(필수)" options={space} />
                </StCommnetInnerSelect>
                <StCommentForm
                  name="description"
                  placeholder="사진에 대해 설명해주세요."
                  rows="6"
                />
                <StTagWrap>
                  <Tag />
                </StTagWrap>
              </StCommentWrap>
            </StContentInner>
          </StContentOut>
        </StContentsWrap>
      </StPostForm>
    </StWrap>
  );
}

export default Posts;
