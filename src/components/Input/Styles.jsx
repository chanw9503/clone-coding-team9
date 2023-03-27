import styled, { css } from "styled-components";

const sizes = {
    large: {height: '145px', padding : "8px 15px 9px"},
    medium: {height: '40px', padding : "8px 15px 9px"},
    small: {width : '138px', height: '21px', padding: "0 15px"},
  };

const StInput = styled.input`
    width: 100%;
    font-size: 15px;
    transition: border-color 0.2s ease 0s, box-shadow 0.2s ease 0s, background-color 0.2s ease 0s;
    display: block;
    box-sizing: border-box;
    height: 40px;
    padding: 0px 15px;
    line-height: 40px;
    border-radius: 4px;
    border: 1px solid rgb(219, 219, 219);
    background-color: rgb(255, 255, 255);
    color: rgb(66, 66, 66);

    ${({ size }) => size && css`
    width: ${sizes[size].width};
    height: ${sizes[size].height};
    padding: ${sizes[size].padding};
    `}
`

const StContainer = styled.div`
    width: 360px;
    height: 100px;
    margin-bottom: 30px;
    letter-spacing: -.4px;
`
const StTilte = styled.div`
    display: block;
    margin-bottom: 12px;
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
    color: #080808;
    letter-spacing: -0.3px; 
`
const StLabel = styled.div`
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 18px;
    color: #828C94;
    letter-spacing: -0.3px;
`


export {sizes, StInput, StContainer, StTilte, StLabel}
