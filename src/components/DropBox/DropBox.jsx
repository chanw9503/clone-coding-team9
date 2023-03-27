import React, { useRef } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import useDetectClose from '../../hooks/useDetectClose';
import { StyledSortButton, StyledDropBox, StyledUl, StyledLi } from './styles';
import { nanoid } from 'nanoid';
import usePostDropBox from '../../hooks/usePostDropBox';

function DropBox(props) {
  const [myPageIsOpen, myPageRef, myPageHandler] = useDetectClose(false);
  const currentStayRef = useRef(false);

  const mutation = usePostDropBox();

  //마우스가 버튼을 떠나고 0.5초 뒤에 열려 있는지 확인 후 닫는다.
  const mouseLeaveHander = () => {
    currentStayRef.current = false;
    setTimeout(() => {
      if (myPageIsOpen === true && currentStayRef.current === false) {
        myPageHandler();
      }
    }, 100);
  };

  const mouseEnterHandler = () => {
    currentStayRef.current = true;
    if (myPageIsOpen === false) {
      myPageHandler();
    }
  };

  const mouseliEnterHandler = () => {
    currentStayRef.current = true;
    props.onCurrentDrop(props.id);
  };

  //dropBox 안에 마우스가 있는지 확인하고 없으면 dropBox를 닫는다.
  const mouseliLeaveHandler = () => {
    currentStayRef.current = false;
    setTimeout(() => {
      if (myPageIsOpen === true && currentStayRef.current === false) {
        myPageHandler();
      }
    }, 500);
  };

  const liClickHandler = () => {
    mutation.mutate({
      id: props.id,
      value: 'ddfadsa',
    });
    console.log('li click');
  };

  const liList = ['추천순', '인기순', '기타순', '몰라순'];

  return (
    <div>
      <StyledSortButton
        onClick={myPageHandler}
        ref={myPageRef}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHander}
      >
        정렬 <BiChevronDown />
      </StyledSortButton>
      <StyledDropBox isDropped={myPageIsOpen}>
        <StyledUl>
          {liList?.map((item) => {
            const id = nanoid();
            return (
              <StyledLi
                key={id}
                onClick={liClickHandler}
                onMouseEnter={mouseliEnterHandler}
                onMouseLeave={mouseliLeaveHandler}
              >
                {item}
              </StyledLi>
            );
          })}
        </StyledUl>
      </StyledDropBox>
    </div>
  );
}

export default DropBox;
