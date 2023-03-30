import React from 'react';
import { StSendImage, StText } from './Styles';
import SendImageIcon from '../../pages/Posts/SendImageIcon';
import { uploadFile } from '../../utils/upload';
import { useDispatch } from 'react-redux';
import { addContents, initBoards } from '../../redux/Modules/boardSlice';

function ImageUpload(props) {
  const saveImage = (file) => {
    if (file) {
      getUrl(file);
    }
  };

  const dispatch = useDispatch();

  const getUrl = async (file) => {
    const s3Location = await uploadFile(file); //URL로 받기
    const newBoards = {
      img: s3Location,
    };
    dispatch(addContents(props.boardsRef.current));
    dispatch(initBoards(newBoards));
  };

  const ChangeHandler = (e) => {
    e.preventDefault();
    const files = e.target.files;
    saveImage(files[0]);
  };

  return (
    <>
      <StSendImage htmlFor="dragdrop">
        <input
          type="file"
          id="dragdrop"
          multiple
          accept="image/*"
          hidden
          required
          onChange={ChangeHandler}
        />
        <div>
          <SendImageIcon />
          <StText>사진올리기</StText>
          <StText style={{ fontSize: '12px' }}>(*최대 10장까지)</StText>
        </div>
      </StSendImage>
    </>
  );
}

export default ImageUpload;
