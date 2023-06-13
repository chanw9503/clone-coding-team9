

##   오늘의집 클론코딩

📝 프로젝트 소개 : 오늘의집 클론 코딩 프로젝트

📅 프로젝트 기간 : 2023.03.24 ~ 2023.03.30

👨‍👩‍👧‍👦  5조 : FE [박찬우](https://github.com/chanw9503) [태윤희]



## 🔧 Technologies & Software Used
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=flat-round&logo=javascript&logoColor=black">  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-round&logo=react&logoColor=white"/>  <img src="https://img.shields.io/badge/Redux-764ABC?style=flat-round&logo=redux&logoColor=white"/>  <img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-round&logo=axios&logoColor=white"/>


<img src="https://img.shields.io/badge/git-F05032?style=flat-round&logo=git&logoColor=white"/>  <img src="https://img.shields.io/badge/github-181717?style=flat-round&logo=github&logoColor=white"/> <img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=flat&logo=Visual Studio Code&logoColor=white" />

## 프로젝트 구현 기능

1. 로그인 / 회원가입 페이지

  * 회원 가입 시, Email 인증 기능이 있습니다.
  
  * 이메일, 비밀번호, 이름에 대한 유효성 검사를 진행해야 됩니다.
  
2. 메인 페이지

  * 게시물들을 확인할 수 있습니다.

  * 좋아요를 눌러서 인기상품을 확인할 수 있습니다.

3. 상세 페이지

  * 게시물에 대한 이미지 / 내용 / 태그 등을 확인할 수 있습니다.
  
  * 게시물에 대해 댓글을 남길 수 있습니다.

4. 글쓰기 페이지

  * 글쓰기 페이지에서 이미지를 업로드 할 수 있습니다.
  
  * 언급할 내용을 태그를 통해서 언급할 수 있습니다.

  * DropDown list를 통해 카테고리를 분류 할 수 있습니다. 


## [Trouble Shooting] 

1. 회원가입 시 유효성 검사에 따른 UI 변화 
  * 유효성검사는 정규식을 활용해서 검사를 진행 했고, 입력할 값에 대한 결과값을 return 받아 확인했습니다.
  * useRef 를 이용해서 유효성에 맞지않는 항목에 대해서 focus()를 진행했고, UI적으로는 boarder의 색변화를 주었습니다. 
  * errorMessage의 경우, 각항목에 state를 두고, 유효성 검사의 return 값에 따라 상태를 표시하도록 했습니다.


2. Amarzon S3에 이미지 업로드 구현하기
  * 프론트엔드 측에서 s3를 이용해서 이미지를 업로드하고, url를 돌려받는 방식을 사용했습니다.
  * s3에 버켓을 생성해 두고, aws-sdk 라이브러리를 이용해서 s3에 접속한 후, <input> 태그로 받은 File 객체의 정보를 전달해줬습니다.
  * s3에 전달된 이미지는 저장이 되고, 비동기적으로 url 값을 전달받습니다. 받을 때는 promise() 함수를 이용해서 결과값을 전달받았습니다.


3. 컴포넌트 상태관리 
  * props를 이용한 상태관리를 하다가, 컴포넌트의 수가 늘어나면서 코드의 복잡도가 증가하고 가독성이 떨어지는 문제가 있었습니다.
  * 컴포넌트간 의존성을 떨어뜨리고, 코드의 가독성을 높이기 위해서 전역 상태관리를 사용하기로 했고,redux를 이용해 이를 해결했스빈다. 
