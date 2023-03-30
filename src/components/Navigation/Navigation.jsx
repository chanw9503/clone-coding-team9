import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import {
  StyledWrap,
  StyledNavBlock,
  StyledNavItemBlock,
  StyledNavItem,
  StyledItemBox,
} from './styles';
function Navigation() {
  const menuList = ['홈', '팔로잉', '사진'];

  const [count, setCount] = useState(-9999);
  return (
    <StyledWrap>
      <StyledNavBlock>
        <StyledNavItemBlock>
          {menuList.map((item, index) => {
            if (+index === +count) {
              return (
                <StyledItemBox key={nanoid()} borderColor={true}>
                  <StyledNavItem
                    onClick={(e) => {
                      setCount(e.target.id);
                    }}
                    id={index}
                  >
                    {item}
                  </StyledNavItem>
                </StyledItemBox>
              );
            } else {
              return (
                <StyledNavItem
                  key={nanoid()}
                  onClick={(e) => {
                    setCount(e.target.id);
                  }}
                  id={index}
                >
                  {item}
                </StyledNavItem>
              );
            }
          })}
        </StyledNavItemBlock>
      </StyledNavBlock>
    </StyledWrap>
  );
}

export default Navigation;
