/**
 *
 * 작성자 : 박찬우
 * 목적 : login page 구현
 * 작성 날짜 : 2023.03.24
 *
 */

import React from 'react';
import {
  StyledWrap,
  StyledContainer,
  StyledForm,
  StyledIdInput,
  StyledPwInput,
  StyledInputBox,
  StyledButton,
  StyledSelection,
  StyledTextDiv,
} from './styles';

function Login() {
  return (
    <StyledWrap>
      <StyledContainer>
        <StyledForm>
          <StyledInputBox>
            <StyledIdInput placeholder="이메일" type="email" />
          </StyledInputBox>
          <StyledInputBox>
            <StyledPwInput />
          </StyledInputBox>
          <StyledButton>로그인</StyledButton>
          <StyledSelection>
            <span style={{ fontSize: '15px', color: '#424242' }}>비밀번호 재설정</span>
            <span style={{ fontSize: '15px', color: '#424242' }}>회원가입</span>
          </StyledSelection>

          <section>
            <StyledTextDiv>SNS계정으로 간편 로그인/회원가입</StyledTextDiv>
            <div>sadas</div>
            <div>sadas</div>
            <div>sadas</div>
          </section>

          <div style={{ marginTop: '24px' }}>asdasdasdasdasdas</div>
        </StyledForm>
      </StyledContainer>
    </StyledWrap>
  );
}

export default Login;
