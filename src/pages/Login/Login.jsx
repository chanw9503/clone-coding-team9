/**
 *
 * 작성자 : 박찬우
 * 목적 : login page 구현
 * 작성 날짜 : 2023.03.24
 *
 */

import React, { useRef } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { __login } from '../../api/auth';
import FackBookLogo from '../../components/FackBookLogo/FackBookLogo';
import HomeLogo from '../../components/HomeLogo';
import KakaoLogo from '../../components/KakaoLogo/KakaoLogo';
import NaverLogo from '../../components/NaverLogo/NaverLogo';

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
  StyledSpan,
} from './styles';

function Login() {
  // const [userEmail, setUserEmail] = useInput();
  // const [password, setPassword] = useInput();

  //useState --> useRef로 변환 렌더링 최적화
  const userEailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();
  const isError = useRef(false);
  const queryClient = useQueryClient();

  const mutation = useMutation(__login, {
    onSuccess: (e) => {
      isError.current = false;
      queryClient.invalidateQueries('login');
      alert(e.data.message);
      navigate('/');
    },
    onError: (confing) => {
      isError.current = true;
      alert('아이디/비번을 다시 확인해 주세요');
      queryClient.invalidateQueries('login');
    },
    onSettled: (e) => {
      if (e.response?.status === 500 || e.response?.status === 400) {
        isError.current = true;
      } else if (e.name === 'AxiosError') {
        alert('서버와 연결을 확인해 주세요');
        isError.current = true;
      }
    },
  });

  const submitHandler = (e) => {
    e.preventDefault();

    mutation.mutate({
      id: passwordRef.current.value + 1212,
      userEmail: userEailRef.current.value,
      password: passwordRef.current.value,
    });
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
                  ref={userEailRef}
                  placeholder="이메일"
                  type="email"
                  borderColor="#f77"
                  boxShadow="rgba(253, 170, 170, 0.3)"
                />
              </StyledInputBox>
              <StyledInputBox>
                <StyledPwInput
                  ref={passwordRef}
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
                  ref={userEailRef}
                  placeholder="이메일"
                  type="email"
                  boxShadow="rgba(171, 201, 225, 0.3)"
                />
              </StyledInputBox>
              <StyledInputBox>
                <StyledPwInput
                  ref={passwordRef}
                  placeholder="비밀번호"
                  type="password"
                  boxShadow="rgba(171, 201, 225, 0.3)"
                />
              </StyledInputBox>
            </>
          )}
          <StyledButton>로그인</StyledButton>
          <StyledSelection>
            <StyledSpan>비밀번호 재설정</StyledSpan>
            <StyledSpan
              onClick={() => {
                navigate('/signup');
              }}
            >
              회원가입
            </StyledSpan>
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
