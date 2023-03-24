export const emailCheck = (email) => {
    const emailRegEx = /^(?=.*[a-zA-Z])(?=.[0-9])$/;
    let message = '';
    let isError = !emailRegEx.test(email);

    if(email ==='') {
        message= "필수 입력 항목입니다."
    } else if (isError ===true) {
        message = "이메일 형식이 올바르지 않습니다.";
    } else {
        message = "";
    }
    return [isError, message];
};

export const pwCheck = (pw) => {
    const pwRegEx = /^(?=.*[a-zA-Z])(?=.[0-9]).{8,15}$/;
    let message = '';
    let isError = !pwRegEx.test(pw);
  
    if (pw === '') {
      message = '필수 입력 항목입니다..';
    } else if (isError === true) {
      message = '비밀번호는 영문, 숫자를 포함하여 8자 이상이어야 합니다.';
    } else {
      message = '';
    }
    return [isError, message];
  };

  export const nickNameCheck = (nickName) => {
    const nickNameRegEx = /^[a-zA-Z가-힣]{2,30}$/;
    let message = '';
  
    let isError = !nickNameRegEx.test(nickName);
  
    if (nickName === '') {
      message = '필수 입력 항목입니다.';
    } else if (isError === true) {
      message = '사용자의 이름은 2~15자만 사용할 수 있습니다.';
    } else {
      message = '';
    }
  
    return [isError, message];
  };
  
  export const reconfirmPw= (pw1, pw2) => {
    let message = '';
    let isError = false;
    if (pw2 === '') {
      message = '필수 입력 항목입니다.';
      isError = true;
    } else if (pw1 !== pw2) {
      message = '비밀번호가 일치하지 않습니다.';
      isError = true;
    } else {
      message = '';
      isError = false;
    }
  
    return [isError, message];
  };