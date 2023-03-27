/*
 * 작성자 : 태윤희
 * 작성 날짜 : 23-03-24
 * 작성 목적 : 회원가입구현
 */

import React from "react";
import FormInput from "../../components/Input/FormInput";
import {
  StContainer,StForm,StSns,StTitle,StEmailForm,SelectFrom,
  StInputFrom,StSnsInner,StErrorMessage,StWrap,StContents,
  StEmailWrap,StButton,StButtonForm,StLogoForm, StLoginNavi,} from "./Styles";
import { useMutation, useQueryClient } from "react-query";
import { addSign, confirmEmail } from "../../api/SignUp";
import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import FackBookLogo from "../../components/FackBookLogo/FackBookLogo";
import KakaoLogo from "../../components/KakaoLogo/KakaoLogo";
import NaverLogo from "../../components/NaverLogo/NaverLogo";
import Logo from "./Logo";

function SignUp() {
  const navigate = useNavigate();
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [selected, setSelected] = useState("");

  //오류메시지 상태저장
  const [NickNameMessage, setNickNameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");

  // 유효성 검사
  const [isNickName, setIsNickName] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  const queryClient = useQueryClient();
  const mutation = useMutation(addSign, {
    onSuccess: () => {
      queryClient.invalidateQueries("signup");
    },
  });

  const confirmSendEmail = useMutation(confirmEmail, {
    onSuccess: () => {
      queryClient.invalidateQueries("signup");
    },
  });

  //회원가입 보내기
  const newUser = {
    id: 8,
    userEmail: email + "@" + selected,
    nickname: nickName,
    password: password,
    confirm: passwordConfirm,
  };

  const onSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(newUser);
    navigate("/");
  };

  //이메일인증보내기
  const userEmail = {
    id: 2,
    userEmail: email + "@" + selected,
  };
  const sendEmail = (e) => {
    e.preventDefault();
    confirmSendEmail.mutate(userEmail);
  };

  // 이메일(유효성)
  const onChangeEmail = useCallback((e) => {
    const emailRegex =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage("이메일 형식이 올바르지 않습니다.");
      setIsEmail(false);
    } else {
      setEmailMessage("");
      setIsEmail(true);
    }
  }, []);

  // 비밀번호(유효성)
  const onChangePassword = useCallback((e) => {
    const passwordRegex = /^[a-zA-Z0-9]{8,30}$/;
    const passwordCurrent = e.target.value;
    setPassword(passwordCurrent);

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage(
        "비밀번호는 영문, 숫자를 포함하여 8자 이상이어야 합니다"
      );
      setIsPassword(false);
    } else {
      setPasswordMessage("");
      setIsPassword(true);
    }
  }, []);

  // 비밀번호 확인(유효성)
  const onChangePasswordConfirm = useCallback(
    (e) => {
      const passwordConfirmCurrent = e.target.value;
      setPasswordConfirm(passwordConfirmCurrent);

      if (password === passwordConfirmCurrent) {
        setPasswordConfirmMessage("");
        setIsPasswordConfirm(true);
      } else {
        setPasswordConfirmMessage("비밀번호가 일치하지 않습니다.");
        setIsPasswordConfirm(false);
      }
    },
    [password]
  );

  // 이름(유효성)
  const onChangeNickName = useCallback((e) => {
    const nickNameRegex =/^[a-zA-Z가-힣0-9]{2,30}$/;
    const nickNameCurrent = e.target.value;
    setNickName(nickNameCurrent);
    if (!nickNameRegex.test(nickNameCurrent)) {
      setNickNameMessage("2글자 이상 입력해주세요.");
      setIsNickName(false);
    } else {
      setNickNameMessage("올바른 이름 형식입니다 :)");
      setIsNickName(true);
    }
  }, []);

  return (
    <StWrap>
        <Logo/>
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
            <StContents>이메일</StContents>
            <StEmailForm>
              <StInputFrom
                type="text"
                placeholder="이메일"
                value={email}
                onChange={onChangeEmail}
              />
              <span style={{ color: "#424242" }}>&nbsp;@&nbsp;</span>
              <SelectFrom
                value={selected}
                onChange={(e) => {
                  setSelected(e.target.value);
                }}
              >
                <option value="disabled">선택해주세요</option>
                <option value="naver.com">naver.com</option>
                <option value="hanmail.net">hanmail.net</option>
                <option value="daum.net">daum.net</option>
                <option value="gamail.com">gamail.com</option>
                <option value="nate.com">nate.com</option>
                <option value="hotmail.com">hotmail.com</option>
                <option value="outlook.com">outlook.com</option>
                <option value="icloud.com">icloud.com</option>
              </SelectFrom>
            </StEmailForm>
          </StEmailWrap>
          {email.length > 0 && (
            <StErrorMessage
              className={`message ${isEmail ? "success" : "error"}`}
            >
              {emailMessage}
            </StErrorMessage>
          )}
          <StButtonForm>
            <StButton
              color="rgb(194, 200, 204)"
              bc="rgb(247, 248, 250)"
              bdc="rgb(218, 220, 224)"
              mb ="30px"
              type="submit"
              onClick={sendEmail}
            >
              이메일 인증하기
            </StButton>
          </StButtonForm>
          <FormInput
            type="password"
            size="medium"
            label="비밀번호"
            labelcomment="영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요."
            placeholder="비밀번호"
            value={password}
            onChange={onChangePassword}
          />
          {password.length > 0 && (
            <StErrorMessage
              className={`message ${isPassword ? "success" : "error"}`}
            >
              {passwordMessage}
            </StErrorMessage>
          )}
          <FormInput
            type="password"
            size="medium"
            label="비밀번호 확인"
            placeholder="비밀번호 확인"
            value={passwordConfirm}
            onChange={onChangePasswordConfirm}
          />
          <StErrorMessage
            className={`message ${isPasswordConfirm ? "success" : "error"}`}
          >
            {passwordConfirmMessage}
          </StErrorMessage>
          <FormInput
            size="medium"
            label="닉네임"
            labelcomment="다른 유저와 겹치지 않도록 입력해주세요. (2~15자)"
            placeholder="별명 (2~15자)"
            value={nickName}
            onChange={onChangeNickName}
          />
          {nickName.length > 0 && (
            <span className={`message ${isNickName ? "success" : "error"}`}>
              {NickNameMessage}
            </span>
          )}
          <StButtonForm>
            <StButton
              color="#fff"
              bc="#35c5f0"
              type="submit"
              onClick={onSubmit}
            >
              회원가입하기
            </StButton>
          </StButtonForm>
          <StLoginNavi>
            이미 아이디가 있으신가요?<div>로그인</div>
          </StLoginNavi>
         
        </StForm>
      </StContainer>
    </StWrap>
  );
}

export default SignUp;
