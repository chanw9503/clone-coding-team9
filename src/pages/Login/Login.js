/**
 *
 * 작성자 : 박찬우
 * 목적 : login page 구현
 * 작성 날짜 : 2023.03.24
 *
 */

import React, { useRef } from 'react';
import { QueryClient, useMutation } from 'react-query';
import styled from 'styled-components';
import { __login } from '../../api/login';
import FackBookLogo from '../../components/FackBookLogo/FackBookLogo';
import HomeLogo from '../../components/HomeLogo';
import KakaoLogo from '../../components/KakaoLogo/KakaoLogo';
import NaverLogo from '../../components/NaverLogo/NaverLogo';
import useInput from '../../hooks/useInput';
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
  StyledTagA,
} from './styles';

function Login() {
  const [userEmail, setUserEmail] = useInput();
  const [password, setPassword] = useInput();

  const isError = useRef(false);

  const queryClient = new QueryClient();

  const mutation = useMutation(__login, {
    onSuccess: () => {
      isError.current = false;
      queryClient.invalidateQueries('login');
    },
    onError: () => {
      console.log('test');
      isError.current = true;
      queryClient.invalidateQueries('login');
    },
    onSettled: (e) => {
      if (e.response?.status === 500) {
        isError.current = true;
      }
    },
  });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('test');
    mutation.mutate({ id: password + 1212, userEmail, password });
  };

  return (
    <StyledWrap>
      <StyledContainer>
        <HomeLogo />
        <StyledForm onSubmit={submitHandler}>
          {isError.current ? (
            <>
              <StyledInputBox>
                <StyledIdInput
                  value={userEmail}
                  onChange={setUserEmail}
                  placeholder="이메일"
                  type="email"
                  borderColor="#f77"
                  boxShadow="rgba(253, 170, 170, 0.3)"
                />
              </StyledInputBox>
              <StyledInputBox>
                <StyledPwInput
                  value={password}
                  onChange={setPassword}
                  placeholder="비밀번호"
                  type="password"
                  borderColor=" #f77"
                  boxShadow="rgba(253, 170, 170, 0.3)"
                />
              </StyledInputBox>
            </>
          ) : (
            <>
              <StyledInputBox>
                <StyledIdInput
                  value={userEmail}
                  onChange={setUserEmail}
                  placeholder="이메일"
                  type="email"
                  boxShadow="rgba(171, 201, 225, 0.3)"
                />
              </StyledInputBox>
              <StyledInputBox>
                <StyledPwInput
                  value={password}
                  onChange={setPassword}
                  placeholder="비밀번호"
                  type="password"
                  boxShadow="rgba(171, 201, 225, 0.3)"
                />
              </StyledInputBox>
            </>
          )}
          <StyledButton>로그인</StyledButton>
          <StyledSelection>
            <span style={{ fontSize: '15px', color: '#424242' }}>비밀번호 재설정</span>
            <span style={{ fontSize: '15px', color: '#424242' }}>회원가입</span>
          </StyledSelection>
        </StyledForm>

        <section>
          <StyledTextDiv>SNS계정으로 간편 로그인/회원가입</StyledTextDiv>
          <FackBookLogo />
          <KakaoLogo />
          <NaverLogo />
        </section>

        <StyledTagA style={{ marginTop: '24px' }}>
          로그인에 문제가 있으신가요?{' '}
        </StyledTagA>
      </StyledContainer>
    </StyledWrap>
  );
}

export default Login;
