import React from 'react';
import { StSendImage, StText, StyledImage } from './Styles';
import SendImageIcon from '../../pages/Posts/SendImageIcon';
import { useEffect } from 'react';
import { uploadFile } from '../../utils/upload';

function ImageUpload(props) {
  const saveImage = (file) => {
    if (file) {
      URL.revokeObjectURL(props.image.preview_URL);
      const preview_URL = URL.createObjectURL(file);

      props.setImage({
        image_file: file,
        preview_URL: preview_URL,
      });

      const s3Location = uploadFile(file); //URL로 받기
      /**
       * 부모에서 내려주는 props 추가
       * const newLocationList = locationList
       * setLocationList(newLocationList)
       */
    }
  };

  const ChangeHandler = (e) => {
    e.preventDefault();
    const files = e.target.files;
    saveImage(files[0]);
  };

  useEffect(() => {
    if (props.defaultImage !== '') {
      props.setImage({ ...props.image, preview_URL: props.defaultImage });
    }
    return () => {
      URL.revokeObjectURL(props.image.preview_URL);
    };
  }, []);

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
        {props.image.preview_URL ? (
          <StyledImage src={props.image.preview_URL} />
        ) : (
          <div>
            <SendImageIcon />
            <StText>사진올리기</StText>
            <StText style={{ fontSize: '12px' }}>(*최대 10장까지)</StText>
          </div>
        )}
      </StSendImage>
    </>
  );
}

export default ImageUpload;
