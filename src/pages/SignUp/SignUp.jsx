/*
* 작성자 : 태윤희
* 작성 날짜 : 23-03-24
* 작성 목적 : 회원가입구현
*/

import React from 'react';
import FormInput from '../../components/Input/FormInput'
import { StContainer, StForm, StSns, StTitle } from './Styles';
import { useMutation, useQueryClient } from 'react-query';
import { addSign } from '../../api/SignUp';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';


function SignUp() {
    const navigate = useNavigate();
    const [nickName, setNickName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [selected, setSelected] = useState('');

    //오류메시지 상태저장
    const [NickNameMessage, setNickNameMessage] = useState('');
    const [emailMessage, setEmailMessage] = useState('');
    const [passwordMessage, setPasswordMessage] = useState('');
    const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('');

    // 유효성 검사
    const [isNickName, setIsNickName] = useState(false);
    const [isEmail, setIsEmail] = useState(false);
    const [isPassword, setIsPassword] = useState(false);
    const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
    
    const queryClient = useQueryClient();
    const mutation =useMutation(addSign, {
        onSuccess : () => {
            queryClient.invalidateQueries("signup")
        }
    });

    const newUser = {
        id: 7,
        userEmail: email +"@"+ selected,
        nickname: nickName,
        password: password,
        confirm: passwordConfirm,
      };

    const onSubmit =  (e) => {
        e.preventDefault()
        mutation.mutate(newUser)
        // navigate('/');
    };
    
    // 이메일
    const onChangeEmail = useCallback((e) => {
        const emailRegex =
        /^(?=.*[a-zA-Z])(?=.[0-9])$/
        const emailCurrent = e.target.value
        setEmail(emailCurrent)
    
        if (!emailRegex.test(emailCurrent)) {
        setEmailMessage('이메일 형식이 올바르지 않습니다.')
        setIsEmail(false)
        } else {
        setEmailMessage('');
        setIsEmail(true)
        }
    }, [])

    // 비밀번호
    const onChangePassword = useCallback((e) => {
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*()+=-])(?=.*[0-9]).{8,15}$/;
        const passwordCurrent = e.target.value
        setPassword(passwordCurrent)
    
        if (!passwordRegex.test(passwordCurrent)) {
        setPasswordMessage('비밀번호는 영문, 숫자, 특수문자를 포함하여 8자 이상이어야 합니다');
        setIsPassword(false);
        } else {
        setPasswordMessage('');
        setIsPassword(true);
        }
    }, [])

    // 비밀번호 확인
    const onChangePasswordConfirm = useCallback(
        (e) => {
        const passwordConfirmCurrent = e.target.value
        setPasswordConfirm(passwordConfirmCurrent)
    
        if (password === passwordConfirmCurrent) {
            setPasswordConfirmMessage('');
            setIsPasswordConfirm(true);
        } else {
            setPasswordConfirmMessage('비밀번호가 일치하지 않습니다.');
            setIsPasswordConfirm(false);
        }
        },
        [password]
    )

    // 이름
    const onChangeNickName = useCallback((e) => {
        setNickName(e.target.value)
        if (e.target.value.length < 2 ||e.target.value.length > 30 ) {
            setNickNameMessage('2글자 이상 입력해주세요.')
            setIsNickName(false)
        } else {
            setNickNameMessage('올바른 이름 형식입니다 :)')
            setIsNickName(true)
        }
    }, [])


        
    return (
        <StContainer>
            <StForm>
            <StTitle>회원가입</StTitle>
            <StSns>
                <div>SNS계정으로 간편하게 회원가입</div>
            </StSns>
            <div>이메일</div>
            <div>
                <FormInput 
                type="text" 
                size="small" 
                value={email} 
                onChange={onChangeEmail}/>
                <span>@</span>
                <select value={selected} onChange={(e)=> {
                    setSelected(e.target.value)
                }}>
                    <option value='disabled'>선택해주세요</option>
                    <option value="naver.com">naver.com</option>
                    <option value="hanmail.net">hanmail.net</option>
                    <option value="daum.net">daum.net</option>
                    <option value="gamail.com">gamail.com</option>
                    <option value="nate.com">nate.com</option>
                    <option value="hotmail.com">hotmail.com</option>
                    <option value="outlook.com">outlook.com</option>
                    <option value="icloud.com">icloud.com</option>
                </select>
                {email.length > 0 && 
                <span className={`message ${isEmail ? 'success' : 'error'}`}>{emailMessage}</span>}
            </div>
            <button>이메일 인증하기</button>
            <FormInput
                type = "password"
                size="medium"
                label="비밀번호"
                placeholder="비밀번호"
                value ={password}
                onChange={onChangePassword}
            />
            {password.length > 0 && (
            <span className={`message ${isPassword ? 'success' : 'error'}`}>{passwordMessage}</span>
            )}
            <FormInput
                type = "password"
                size="medium"
                label="비밀번호 확인"
                placeholder="비밀번호 확인"
                value={passwordConfirm}
                onChange={onChangePasswordConfirm}
            />
            <span className={`message ${isPasswordConfirm ? 'success' : 'error'}`}>{passwordConfirmMessage}</span>
            <FormInput
                size="medium"
                label="닉네임"
                labelcomment="다른 유저와 겹치지 않도록 입력해주세요. (2~15자)"
                placeholder="별명 (2~15자)"
                value={nickName}
                onChange={onChangeNickName}
            />
            {nickName.length > 0 && <span className={`message ${isNickName ? 'success' : 'error'}`}>{NickNameMessage}</span>}
            <button type="submit" onClick={onSubmit}>회원가입하기</button>
            <div>이미 아이디가 있으신가요? </div>
            </StForm>
        </StContainer>
    );
}

export default SignUp;