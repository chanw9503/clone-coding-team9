import styled from 'styled-components';
import { COLOR } from '../../shared/color';

export const StWrap = styled.div`
  margin: 0;
  padding: 0;
  display: block;
`;

export const StHeader = styled.div`
  height: 79px;
  padding: 0px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1256px;
  box-sizing: border-box;
  margin: 0px auto;
`;
export const StPostBtn = styled.div`
  border: none;
  background: none;
  font: inherit;
  font-size: 16px;
  font-weight: bold;
  line-height: 18px;

  display: inline-block;
  justify-content: center;
  align-items: center;
  text-align: center;

  width: auto;
  border-radius: 4px;
  padding: 11px 45px 12px;
  color: ${COLOR.white};
  outline: none;
  overflow: hidden;
  background-color: rgb(53, 197, 240);

  &:hover {
    background-color: rgb(9, 173, 219);
  }
`;
export const StCategory = styled.div`
  border-bottom: 1px solid rgb(219, 219, 219);
`;

export const StPostForm = styled.div`
  margin: 30px auto 0px;
  padding: 0px 30px;
  max-width: 1003px;
  box-sizing: border-box;
`;

export const StSeletWrap = styled.div`
  margin: 0px 0px 40px;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  font-size: 15px;
  padding: 0;
`;
export const StContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 433px;
  height: 50px;
`;
export const StIput = styled.div`
  position: relative;
  display: inline-block;
  margin: 0px 5px 10px;
  width: auto;
  -webkit-box-flex: 1;
`;

export const StContentsWrap = styled.div`
  display: flex;
`;
export const StContentOut = styled.div`
  flex: 1 0 0px;
  padding: 0px 0px 40px;
`;
export const StContentInner = styled.div`
  display: flex;
  margin: 0px -12px;

  display: flex;
  flex-direction: column;
`;
export const StSendImageWrap = styled.div`
  flex: 1 0 0px;
  margin: 0px 12px;
  min-width: 400px;
  min-height: 250px;
  border: 1px dashed rgb(218, 220, 224);

  border-radius: 4px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgb(247, 248, 250);
`;

export const StCommentWrap = styled.div`
  flex: 1 0 0px;
  margin: 0px 12px;
  min-width: 400px;
  min-height: 250px;
`;
export const StCommnetInnerSelect = styled.div`
  position: relative;
  margin: 0px 0px 10px;
  color: #bdbdbd;
`;
export const StCommentForm = styled.textarea`
  overflow: hidden;
  overflow-wrap: break-word;
  height: 144.333px;
  margin: 0px 0px 10px;
  padding: 8px 15px 9px;

  display: inline-block;
  width: 100%;
  border: 1px solid #dbdbdb;
  background-color: #fff;
  color: #000;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 15px;
  line-height: 21px;
  transition: border-color 0.1s, background-color 0.1s;
  resize: none;
  -webkit-appearance: none;
`;
export const StTagWrap = styled.div`
  margin: 0px 0px 10px;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StSendImage = styled.label`
  margin: 0px;
  width: 100%;
  padding: 20px 0;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0 0 40px;
  transition: opacity 0.1s ease 0s;
  background-color: rgb(245, 245, 245);
  color: rgb(117, 117, 117);
  border-radius: 4px;
  font-weight: bold;
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;

  opacity: 1;
  &:hover {
    opacity: 0.7;
  }
`;

export const StyledPaddingBlock = styled.div`
  padding: 0 0 40px;
`;

export const StyledOl = styled.ol`
  flex: 1 0 0px;
  list-style: none;
`;

export const Styledli = styled.li`
  list-style: none;
`;

export const StyledFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
