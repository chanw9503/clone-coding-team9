/**
 *
 * 작성자 : 박찬우
 * 목적 : login Page style
 * 수정날짜 : 2023.03.24
 */

import styled, { css } from 'styled-components';
import { COLOR } from '../../shared/color';

const StyledWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-grow: 1;
`;

const StyledContainer = styled.div`
  flex: 1 0 auto;
  margin: 0 auto;

  max-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  padding: 40px 0px;
  height: 100vh;
`;

const StyledForm = styled.form`
  border: none;
  width: 300px;
`;

const StyledIdInput = styled.input`
  position: relative;
  display: block;
  width: 100%;
  border-radius: 4px 4px 0px 0px;
  border: 1px solid lightgray;
  line-height: 21px;
  font-size: 15px;
  color: black;
  font-family: 'Noto Sans KR', 'Noto Sans CJK KR', '맑은 고딕', 'Malgun Gothic',
    sans-serif;
  padding: 13px 15px 14px;
  box-sizing: border-box;
  border-color: ${(props) => (props.borderColor ? COLOR.boardRed : 'lightgray')};
  outline: none;

  &:hover {
    background-color: rgba(0, 0, 0, 0.01);
  }

  &:focus {
    box-shadow: ${(props) => (!props.borderColor ? COLOR.hoverBlue : COLOR.hoverRed)} 0px
      0px 0px 3px;
    z-index: 10;
  }
`;

const StyledPwInput = styled.input`
  position: relative;
  display: block;
  width: 100%;
  border: 1px solid lightgray;
  margin-top: -1px;
  border-radius: 0px 0px 4px 4px;
  padding: 13px 15px 14px;
  line-height: 21px;
  font-size: 15px;
  color: black;
  font-family: 'Noto Sans KR', 'Noto Sans CJK KR', '맑은 고딕', 'Malgun Gothic',
    sans-serif;
  transition: box-shadow 0.2s ease 0s, background-color 0.2s ease 0s;
  box-sizing: border-box;
  resize: none;
  outline: none;

  border-color: ${(props) => (props.borderColor ? COLOR.boardRed : 'lightgray')};

  &:hover {
    background-color: rgba(0, 0, 0, 0.01);
  }

  &:focus {
    box-shadow: ${(props) => (!props.borderColor ? COLOR.hoverBlue : COLOR.hoverRed)} 0px
      0px 0px 3px;
  }
`;

const StyledInputBox = styled.div`
  position: relative;
`;

const StyledButton = styled.button`
  user-select: none;
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  font-family: 'Noto Sans KR', 'Noto Sans CJK KR', '맑은 고딕', 'Malgun Gothic',
    sans-serif;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  border: 1px solid transparent;

  background-color: ${COLOR.buttonBlue};
  padding: 15px 10px;
  line-height: 20px;
  font-size: 17px;
  min-height: 50px;

  width: 100%;
  margin: 20px 0;

  border-radius: 4px;

  color: white;

  &:hover {
    background-color: ${COLOR.hoverDeepBlue};
  }
`;

const StyledSelection = styled.section`
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const StyledTextDiv = styled.div`
  margin: 35px 0px 15px;
  color: rgb(117, 117, 117);
  font-size: 12px;
  font-weight: normal;
  line-height: 1.33;
  text-align: center;
`;

const StyledTagA = styled.a`
  margin-top: 24px;
  color: #c2c8cc;
  font-size: 14px;
  line-height: 18px;

  cursor: pointer;
  touch-action: manipulation;
`;

export {
  StyledWrap,
  StyledContainer,
  StyledForm,
  StyledIdInput,
  StyledPwInput,
  StyledInputBox,
  StyledButton,
  StyledSelection,
  StyledTextDiv,
  StyledTagA,
};
