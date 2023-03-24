/*
* 작성자 : 태윤희
* 작성 날짜 : 23-03-24
* 작성 목적 : 회원가입구현
*/

import React from 'react';
import styled from 'styled-components';

function SignUp() {
   
  return (
    <StContainer>
            <StForm>
            <StTitle>회원가입</StTitle>
            <StSns>
                <div>SNS계정으로 간편하게 회원가입</div>
            </StSns>
            <div>이메일</div>
            <input />@<input />
            <div>비밀번호</div>
            <input />
            <div>비밀번호확인</div>
            <input />
            <div>닉네임</div>
            <input />
            </StForm>
    </StContainer>
  );
}

export default SignUp

const StContainer = styled.div`
    padding-top: 40px;
    width: calc(100% - 30px);
    margin: auto;
    display: block;
`
const StTitle = styled.h1`
    font-size: 20px;
    font-weight: bold;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`
const StSns = styled.div`
    margin: 30px 0;
    padding-bottom: 30px;
    border-bottom: 1px solid #ededed;
`

const StForm = styled.div`
    width: 360px;
    margin : 0 auto;
    padding: 60px 0;
`