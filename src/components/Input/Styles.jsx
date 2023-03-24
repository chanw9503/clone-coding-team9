import styled, { css } from "styled-components";

const sizes = {
    large: {height: '145px', padding : "8px 15px 9px"},
    medium: {height: '40px', padding : "8px 15px 9px"},
    small: {height: '40px', padding: "0 15px"},
  };

const StInput = styled.input`
    width: 100%;
    height : 40px;
    border-radius: 4px;

    ${({ size }) => size && css`
    width: ${sizes[size].width};
    height: ${sizes[size].height};
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
    color: #2F3438;
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
