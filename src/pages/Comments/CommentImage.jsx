import React from 'react'
import styled from 'styled-components';

function CommentImage() {
  return (
    <StImageForm>
        <StImageBox src="https://bucketplace-v2-development.s3.amazonaws.com/uploads/default_images/avatar.png" height="0" />
    </StImageForm>
  );
};

export default CommentImage;

export const StImageForm = styled.figure`
  display: inline-block;
  background: url(https://bucketplace-v2-development.s3.amazonaws.com/uploads/default_images/avatar.png) 50% center / cover no-repeat;
  border-radius: 50%;
  width: 30px;
  margin-right: 12px;
  flex-shrink: 0;
  border: 0.5px solid rgba(0, 0, 0, 0.08);
`

export const StImageBox = styled.img`
  height: 0px;
  display: block;
  visibility: hidden;
  padding-top: 100%;
`
