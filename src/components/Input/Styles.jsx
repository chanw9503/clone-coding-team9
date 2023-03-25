import styled, { css } from "styled-components";

const sizes = {
    large: {height: '145px', padding : "8px 15px 9px"},
    medium: {height: '21px', padding : "8px 15px 9px"},
    small: {wideheight: '21px', padding: "0 15px"},
  };

const StInput = styled.input`
    width: 100%;
    border: 1px solid #dbdbdb;
    border-radius: 4px;
    line-height: 21px;
    :focus {
        border-color: rgb(136, 214, 250);
    }

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
