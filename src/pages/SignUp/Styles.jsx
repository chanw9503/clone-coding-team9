import styled from 'styled-components';

export const StWrap = styled.div`
    padding-top: 40px;
    width: calc(100% - 30px);
    margin: auto;
`
export const StContainer = styled.div`
    padding-top: 40px;
    margin: 0 auto;
    margin: auto;
    padding: 60px 0;
    display: block;
    letter-spacing: -.4px;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
`
export const StTitle = styled.h1`
    font-weight: 700;
    font-size: 20px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`
export const StContents = styled.div`
    display: block;
    margin-bottom: 12px;
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
`
export const StSns = styled.div`
    margin: 30px 0;

    border-bottom: 1px solid #ededed;
    padding: 0;
`
export const StForm = styled.form`
    width: 360px;
    margin : 0 auto;
    padding: 60px 0;
`
export const StEmailWrap = styled.div`
    width: 100%;
    height: 100px;
`
export const StEmailForm = styled.div`
    width: 100%;
    height: 40px;
    display: block;
    display: flex;
    flex-direction: row;
    text-align: center;
    align-items : center;
`
export const SelectFrom = styled.select`
    font-size: 15px;
    width: 100%;
    transition: border-color .2s,box-shadow .2s,background-color .2s;
    display: block;
    box-sizing: border-box;
    height: 40px;
    padding: 0 15px;
    line-height: 40px;
    border-radius: 4px;
    border: 1px solid #dbdbdb;
    background-color: #fff;
    color: #424242;
`

export const StInputFrom = styled.input`
    font-size: 15px;
    width: 100%;
    transition: border-color .2s,box-shadow .2s,background-color .2s;
    box-sizing: border-box;
    height: 40px;
    padding: 0 15px;
    line-height: 40px;
    border-radius: 4px;
    border: 1px solid #dbdbdb;
    background-color: #fff;
    color: #424242;
`

export const StSnsInner = styled.div`
    font-size: 12px;
    text-align: center;
    margin: 15px 0;
    color: #757575;
`
export const StLogoForm = styled.div`
    display: flex;
    justify-content: center;
`

export const StButtonForm = styled.div`
    margin-bottom: 30px;
    padding-top: 2px;
`

export const StButton = styled.button`
  cursor : pointer;
  width: 100%;
  height: 45px;
  font-weight: 700;
  font-size: 15px;
  padding-top: 2px;
  border-radius: 4px;
  border: 1px solid transparent;
  transition: color .1s,background-color .1s,border-color .1s;
  background-color: ${({ bc }) => bc};
  border-color: ${({ bdc }) => bdc};
  color: ${({ color }) => color};
  border: ${({bd}) => bd};
  margin-top: ${({mt})=>mt};
  margin-bottom: ${({mb})=> mb};
  padding: ${({pd})=>pd};
`;

export const StErrorMessage =styled.span`
    font-size: 14px;
    line-height: 18px;
    color: rgb(255, 119, 119);
`

export const StLoginNavi = styled.div`
    text-align: center;
    margin-top: 30px;
    font-size: 15px;
    
`