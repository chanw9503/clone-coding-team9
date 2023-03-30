import { nanoid } from 'nanoid';
import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { addMainUrl } from '../../redux/Modules/boardSlice';
import { DropUrl } from '../../shared/options';
import { StyledLi, StyledSortButton, StyledUl, Title } from './styles';

function DropBox(props) {
  const { title, list, isShow, close, open } = props;

  const dispatch = useDispatch();
  const ref = useRef(null);
  const dropdownRef = useRef(null);
  const [btnPosition, setBtnPosition] = useState({ top: 0, left: 0, height: 0 });

  useEffect(() => {
    const { current } = ref;
    const { top, left, height, width } = current.getBoundingClientRect();
    setBtnPosition({ top, left, width, height });
  }, [ref]);

  const mouseOverHandler = (e) => {
    if (
      e.target === dropdownRef.current || //현재 이벤트가 UL의 이면 ul박스를 닫지 하지 않는다.
      e.target.parentNode === dropdownRef.current || //부모 노드가 UL이면 ul박스를 닫지 하지 않는다.
      e.target === ref.current || //현재 이벤트가 발생한 곳이 버튼이면 ul박스를 닫지 하지 않는다.
      e.target.parentNode === ref.current //부모 노드가 버튼이면 ul박스를 닫지 하지 않는다.
    ) {
      return;
    }

    close();
    window.removeEventListener('mouseover', mouseOverHandler);
  };

  const hoverHandler = () => {
    open();
    Array.from(document.body.children).forEach((node) => {
      if (node.tagName === 'UL' && node !== dropdownRef.current) {
        node.style.display = 'none';
      }
    });

    window.addEventListener('mouseover', mouseOverHandler);
  };

  const onClickHanlder = (e) => {
    const value = e.target.innerText;
    const URL = DropUrl[value];

    console.log('eeeeeee', URL);
    dispatch(addMainUrl(URL));
  };

  return (
    <>
      <Title onMouseEnter={hoverHandler} ref={ref}>
        <StyledSortButton onClick={close}>{title}</StyledSortButton>
      </Title>
      {isShow && (
        <>
          {createPortal(
            <StyledUl ref={dropdownRef} pos={btnPosition}>
              {list.map((item) => (
                <StyledLi onClick={onClickHanlder} key={nanoid()}>
                  {item.name}
                </StyledLi>
              ))}
            </StyledUl>,
            document.body
          )}
        </>
      )}
    </>
  );
}

export default DropBox;
