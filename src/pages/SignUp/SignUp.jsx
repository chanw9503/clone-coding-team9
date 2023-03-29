/*
 * 작성자 : 태윤희
 * 작성 날짜 : 23-03-24
 * 작성 목적 : 회원가입구현
 */

import FackBookLogo from '../../components/FackBookLogo/FackBookLogo';
import KakaoLogo from '../../components/KakaoLogo/KakaoLogo';
import NaverLogo from '../../components/NaverLogo/NaverLogo';
import useEmailComfirm from '../../hooks/useEmailComfirm';
import FormInput from '../../components/Input/FormInput';
import Select from '../../components/Select/Select';
import { useNavigate } from 'react-router-dom';
import useSignUp from '../../hooks/useSignUp';
import { Link } from 'react-router-dom';
import React, { useRef } from 'react';
import { useState } from 'react';
import Logo from './Logo';
import {
  StContainer,
  StForm,
  StSns,
  StTitle,
  StEmailForm,
  SelectFrom,
  StInputFrom,
  StSnsInner,
  StErrorMessage,
  StWrap,
  StContents,
  StEmailWrap,
  StButton,
  StButtonForm,
  StLogoForm,
  StLoginNavi,
  StyledImput,
} from './Styles';
import {
  onChangeEmail,
  onChangeNickName,
  onChangePassword,
  onChangePasswordConfirm,
} from '../../utils/validation';
import useGetEmailValidate from '../../hooks/useGetEmailValidate';

function SignUp() {
  const navigate = useNavigate();
  const [nickName, setNickName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [selected, setSelected] = useState('');

  const [emailCode, setEmailCode] = useState('');

  const [emailClick, setEmailClick] = useState(false);

  //오류메시지 상태저장
  const [NickNameMessage, setNickNameMessage] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('');

  // 유효성 검사
  const [isNickName, setIsNickName] = useState(true);
  const [isEmail, setIsEmail] = useState(true);
  const [isPassword, setIsPassword] = useState(true);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(true);

  const [validate, setValiDate] = useState({
    email: true,
    password: true,
    rePassword: true,
    nickName: true,
  });

  const mutation = useSignUp();
  const EmailMutation = useGetEmailValidate();

  const confirmSendEmail = useEmailComfirm();

  const emailRef = useRef(false);
  const passwordRef = useRef(false);
  const rePasswordRef = useRef(false);
  const nickNameRef = useRef(false);

  const emailOption = [
    'naver.com',
    'hanmail.net',
    'daum.net',
    'gamail.com',
    'nate.com',
    'hotmail.com',
    'outlook.com',
    'icloud.com',
  ];

  const onSubmit = (e) => {
    e.preventDefault();

    if (validate.email === true) {
      alert('이메일을 다시 확인해 주세요.');
      emailRef.current.focus();
      setIsEmail(false);
    } else if (validate.password === true) {
      alert('비밀번호를 다시 확인해 주세요.');
      passwordRef.current.focus();
      setIsPassword(false);
    } else if (validate.rePassword === true) {
      alert('비밀번호 확인을 다시 확인해 주세요.');
      rePasswordRef.current.focus();
      setIsPasswordConfirm(false);
    } else if (validate.nickName === true) {
      alert('닉네임을 다시 확인해 주세요.');
      nickNameRef.current.focus();
      setIsNickName(false);
    } else {
      //회원가입 보내기
      const newUser = {
        id: 8,
        userEmail: email + '@' + selected,
        nickname: nickName,
        password: password,
        confirm: passwordConfirm,
      };

      mutation.mutate(newUser);
      navigate('/');
    }
  };

  //이메일인증보내기
  const userEmail = {
    id: 7,
    userEmail: email + '@' + selected,
  };

  const sendEmail = (e) => {
    e.preventDefault();
    confirmSendEmail.mutate(userEmail);
  };

  const onValidateEmail = (e) => {
    const validateEmail = onChangeEmail(
      e.target.value,
      setEmail,
      setIsEmail,
      setEmailMessage,
      setEmailClick
    );

    setValiDate({ ...validate, email: validateEmail });
  };

  const onValidatePassword = (e) => {
    const validatePassword = onChangePassword(
      e.target.value,
      setPassword,
      setIsPassword,
      setPasswordMessage
    );

    setValiDate({ ...validate, password: validatePassword });
  };

  const onValidaterePassword = (e) => {
    const validaterePassword = onChangePasswordConfirm(
      password,
      e.target.value,
      setPasswordConfirm,
      setIsPasswordConfirm,
      setPasswordConfirmMessage
    );

    setValiDate({ ...validate, rePassword: validaterePassword });
  };

  const onValidateNickName = (e) => {
    const validateNickName = onChangeNickName(
      e.target.value,
      setNickName,
      setIsNickName,
      setNickNameMessage
    );

    setValiDate({ ...validate, nickName: validateNickName });
  };

  const onSelectHandler = (newValue) => {
    setSelected(newValue);
  };

  const ClickEmailCodeHandler = (e) => {
    e.preventDefault();
    EmailMutation.mutate(emailCode);
  };

  return (
    <StWrap>
      <Logo />
      <StContainer>
        <StForm>
          <StTitle>회원가입</StTitle>
          <StSns>
            <StSnsInner>SNS계정으로 간편하게 회원가입</StSnsInner>
            <StLogoForm>
              <FackBookLogo />
              <KakaoLogo />
              <NaverLogo />
            </StLogoForm>
          </StSns>
          <StEmailWrap>
            <StContents isEail={isEmail}>이메일</StContents>
            <StEmailForm>
              <StInputFrom
                type="text"
                placeholder="이메일"
                value={email}
                onChange={onValidateEmail}
                borderColor={isEmail}
                ref={emailRef}
              />
              <span style={{ color: '#424242' }}>&nbsp;@&nbsp;</span>
              <Select
                name="size"
                defaultValue="선택해주세요"
                options={emailOption}
                value={selected}
                onChange={onSelectHandler}
                validate={isEmail}
              />
            </StEmailForm>
            {email.length > 0 && (
              <StErrorMessage className={`message ${isEmail ? 'success' : 'error'}`}>
                {emailMessage}
              </StErrorMessage>
            )}
          </StEmailWrap>

          <StButtonForm>
            {isEmail && email !== '' ? (
              <StButton
                color="rgb(194, 200, 204)"
                bc="rgb(247, 248, 250)"
                bdc="rgb(218, 220, 224)"
                hc="rgb(218, 220, 224)"
                mb="5px"
                type="submit"
                onClick={(e) => {
                  sendEmail(e);
                  setEmailClick(!emailClick);
                }}
              >
                이메일 인증하기
              </StButton>
            ) : (
              <StButton
                color="rgb(194, 200, 204)"
                bc="rgb(247, 248, 250)"
                bdc="rgb(218, 220, 224)"
                hc="rgb(218, 220, 224)"
                mb="5px"
                type="submit"
                onClick={(e) => {
                  sendEmail(e);
                  setEmailClick(!emailClick);
                }}
                disabled
              >
                이메일 인증하기
              </StButton>
            )}

            {emailClick === true && isEmail === true ? (
              <>
                <StyledImput
                  value={emailCode}
                  onChange={(e) => setEmailCode(e.target.value)}
                />
                <StButton
                  mt="0"
                  color="#fff"
                  bc="#35c5f0"
                  type="submit"
                  hc="rgb(9, 173, 219)"
                  onClick={ClickEmailCodeHandler}
                >
                  인증하기
                </StButton>
              </>
            ) : null}
          </StButtonForm>
          <FormInput
            type="password"
            size="medium"
            label="비밀번호"
            labelcomment="영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요."
            placeholder="비밀번호"
            isError={isPassword}
            error={passwordMessage}
            value={password}
            isPassword={isPassword}
            onChange={onValidatePassword}
            reference={passwordRef}
          />
          <FormInput
            type="password"
            size="medium"
            label="비밀번호 확인"
            placeholder="비밀번호 확인"
            isError={isPasswordConfirm}
            error={passwordConfirmMessage}
            value={passwordConfirm}
            onChange={onValidaterePassword}
            reference={rePasswordRef}
          />
          <FormInput
            size="medium"
            label="닉네임"
            labelcomment="다른 유저와 겹치지 않도록 입력해주세요. (2~15자)"
            placeholder="별명 (2~15자)"
            value={nickName}
            onChange={onValidateNickName}
            isError={isNickName}
            error={NickNameMessage}
            reference={nickNameRef}
          />
          <StButtonForm>
            <StButton
              color="#fff"
              bc="#35c5f0"
              type="submit"
              onClick={onSubmit}
              hc="rgb(9, 173, 219)"
            >
              회원가입하기
            </StButton>
          </StButtonForm>
          <StLoginNavi>
            이미 아이디가 있으신가요? &nbsp;
            <Link to={'/login'} style={{ fontWeight: 'bold' }}>
              로그인
            </Link>
          </StLoginNavi>
        </StForm>
      </StContainer>
    </StWrap>
  );
}

export default SignUp;
