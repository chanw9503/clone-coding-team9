// 이메일(유효성)
export const onChangeEmail = (
  value,
  setHandler,
  isHandler,
  messageHandler,
  setCheckHandler
) => {
  const emailRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*$/i;
  const emailCurrent = value;
  setHandler(emailCurrent);

  console.log(emailCurrent);
  if (emailCurrent === '') {
    messageHandler('이메일은 필수 항목 입니다.');
    isHandler(false);
  } else if (!emailRegex.test(emailCurrent)) {
    messageHandler('이메일 형식이 올바르지 않습니다.');
    isHandler(false);
    setCheckHandler(false);
  } else {
    messageHandler('');
    isHandler(true);
  }

  return !emailRegex.test(emailCurrent);
};
// 비밀번호(유효성)
export const onChangePassword = (value, setHandler, isHandler, messageHandler) => {
  const passwordRegex = /^[a-zA-Z0-9]{8,30}$/;
  const passwordCurrent = value;

  setHandler(passwordCurrent);

  if (passwordCurrent === '') {
    messageHandler('비밀번호 입력은 필수입니다.');
    isHandler(false);
  } else if (!passwordRegex.test(passwordCurrent)) {
    messageHandler('비밀번호는 영문, 숫자를 포함하여 8자 이상이어야 합니다');
    isHandler(false);
  } else {
    messageHandler('');
    isHandler(true);
  }
  return !passwordRegex.test(passwordCurrent);
};

// 비밀번호 확인(유효성)
export const onChangePasswordConfirm = (
  password,
  value,
  setHandler,
  isHandler,
  messageHandler
) => {
  const passwordConfirmCurrent = value;
  setHandler(passwordConfirmCurrent);

  if (passwordConfirmCurrent === '') {
    messageHandler('비밀번호 재확인은 필수 입니다.');
    isHandler(false);
  } else if (password === passwordConfirmCurrent) {
    messageHandler('');
    isHandler(true);
  } else {
    messageHandler('비밀번호가 일치하지 않습니다.');
    isHandler(false);
  }

  return !(password === passwordConfirmCurrent);
};

// 이름(유효성)
export const onChangeNickName = (value, setHandler, isHandler, messageHandler) => {
  const nickNameRegex = /^[a-zA-Z가-힣0-9]{2,30}$/;
  const nickNameCurrent = value;
  setHandler(nickNameCurrent);
  if (!nickNameRegex.test(nickNameCurrent)) {
    messageHandler('2글자 이상 입력해주세요.');
    isHandler(false);
  } else {
    messageHandler('올바른 이름 형식입니다 :)');
    isHandler(true);
  }

  return !nickNameRegex.test(nickNameCurrent);
};
