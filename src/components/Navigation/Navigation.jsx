import React, { useState } from 'react';
import {
  StyledNavBlock,
  StyledNavItemBlock,
  StyledNavItem,
  StyledItemBox,
} from './styles';
function Navigation() {
  const menuList = ['홈', '팔로잉', '사진'];

  const [count, setCount] = useState(-9999);
  return (
    <StyledNavBlock>
      <StyledNavItemBlock>
        {menuList.map((item, index) => {
          if (+index === +count) {
            return (
              <StyledItemBox borderColor={true}>
                <StyledNavItem
                  onClick={(e) => {
                    setCount(e.target.id);
                  }}
                  key={index}
                  id={index}
                >
                  {item}
                </StyledNavItem>
              </StyledItemBox>
            );
          } else {
            return (
              <StyledNavItem
                onClick={(e) => {
                  setCount(e.target.id);
                }}
                key={index}
                id={index}
              >
                {item}
              </StyledNavItem>
            );
          }
        })}
      </StyledNavItemBlock>
    </StyledNavBlock>
  );
}

export default Navigation;
