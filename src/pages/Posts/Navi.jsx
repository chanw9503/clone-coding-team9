import React, { useState } from "react";
import { StNavForm, StWrap, StItemBox, StNavItem } from "./NaviStyles";

function Navi() {
  const category = ["사진", "동영상"];
  const [count, setCount] = useState(-9999);

  return (
    <StWrap>
      <StNavForm>
        {category.map((item, index) => {
          if (+index === +count) {
            return (
              <StItemBox borderColor={true}>
                <StNavItem
                  onClick={(e) => {setCount(e.target.id);}}
                  key={index} id={index}
                >
                  {item}
                </StNavItem>
              </StItemBox>
            );
          } else {
            return (
              <StNavItem
                onClick={(e) => {setCount(e.target.id);}}
                key={index} id={index}
              >
                {item}
              </StNavItem>
            );
          }
        })}
      </StNavForm>
    </StWrap>
  );
}

export default Navi;
