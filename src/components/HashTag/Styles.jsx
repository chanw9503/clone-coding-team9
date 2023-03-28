import styled from "styled-components";

export const StTagWrap =styled.div`
    margin: 0px 0px 10px;
`

export const StTagOut=styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 3px;
    max-width: calc(100% - 6px);
    position: relative; 
    font-size: 15px;
    font-weight: 400;
`

export const TagForm = styled.input`
    max-width: 100%;
    padding: 5px 8px 6px 8px;
    font: inherit;
    line-height: inherit;
    color: #757575;
    background-color: #f5f5f5;
    border: none;
    border-radius: 4px;
    transition: box-shadow .2s;
    width: 55px;
    box-sizing: content-box;
    font-size: 15px;
    font-weight: bold;
    &:focus {
        outline: none;
        box-shadow : 3px rgb(130,224,250);
    }
`
export const StDeleteBtn= styled.button`
    max-width: 100%;
    margin: 3px;
    padding: 5px 8px 6px 18px;
    font: inherit;
    line-height: inherit;
    color: #757575;
    background-color: #f5f5f5;
    border: none;
    border-radius: 4px;
    transition: box-shadow .2s;
    box-sizing: content-box;
    font-size: 15px;
    &:hover {
        color: rgb(41, 39, 39);
    }
`