import styled from 'styled-components';

export const StSendImage = styled.label`
  margin: 0px;
  width: 100%;
  height: 100%;
  border: none;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: opacity 0.1s ease 0s;

  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;
`;
export const StSendImageInner = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: rgb(247, 248, 250);
  border: 1px dashed rgb(218, 220, 224);
  border-radius: 4px;
  box-sizing: border-box;
  color: rgb(164, 172, 179);
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const StText = styled.p`
  color: rgb(164, 172, 179);
`;
