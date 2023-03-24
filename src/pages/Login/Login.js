/**
 *
 * 작성자 : 박찬우
 * 목적 : login page 구현
 * 작성 날짜 : 2023.03.24
 *
 */

import React, { useRef } from 'react';
import { QueryClient, useMutation, useQuery } from 'react-query';
import { __login } from '../../api/login';
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
    onError: (e) => {
      isError.current = true;
      console.log(e);
      queryClient.invalidateQueries('login');
    },
  });

  console.log('isError.curren', isError.current);

  const handlerSubmit = (e) => {
    e.preventDefault();

    mutation.mutate({ id: '12', userEmail, password });
  };

  return (
    <StyledWrap>
      <StyledContainer>
        <StyledForm onSubmit={handlerSubmit}>
          <StyledInputBox>
            {isError.current ? (
              <StyledIdInput
                value={userEmail}
                onChange={setUserEmail}
                placeholder="이메일"
                type="email"
                isError={true}
              />
            ) : (
              <StyledIdInput
                value={userEmail}
                onChange={setUserEmail}
                placeholder="이메일"
                type="email"
                isError={true}
              />
            )}
          </StyledInputBox>
          <StyledInputBox>
            <StyledPwInput
              value={password}
              onChange={setPassword}
              placeholder="비밀번호"
              type="password"
            />
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
