import styled, { css } from 'styled-components';
import { COLOR } from '../../shared/color';

export const StWrap = styled.div`
  padding-top: 40px;
  width: calc(100% - 30px);
  margin: auto;
`;
export const StContainer = styled.div`
  padding-top: 40px;
  margin: 0 auto;
  margin: auto;
  padding: 60px 0;
  display: block;
  letter-spacing: -0.4px;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
`;
export const StTitle = styled.h1`
  font-weight: 700;
  font-size: 20px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;
export const StContents = styled.div`
  display: block;
  margin-bottom: 12px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  color: ${(props) => (props.isEail === true ? 'black' : 'red')};
`;
export const StSns = styled.div`
  margin: 30px 0;
  border-bottom: 1px solid #ededed;
  padding-bottom: 30px;
`;
export const StForm = styled.form`
  width: 360px;
  margin: 0 auto;
  padding: 60px 0;
`;
export const StEmailWrap = styled.div`
  width: 100%;
  height: 100px;
`;
export const StEmailForm = styled.div`
  width: 100%;
  height: 40px;
  display: block;
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
`;

export const StInputFrom = styled.input`
  font-size: 15px;
  font-weight: 700;
  width: 100%;
  transition: border-color 0.2s, box-shadow 0.2s, background-color 0.2s;
  box-sizing: border-box;
  height: 40px;
  padding: 0 15px;
  line-height: 40px;
  border-radius: 4px;
  outline: none;

  ${(props) =>
    props.borderColor
      ? css`
          border: 1px solid #dbdbdb;
          &:focus {
            box-shadow: ${COLOR.hoverBlue} 0px 0px 0px 3px;
          }
        `
      : css`
          border: 1px solid red;
          &:focus {
            box-shadow: ${COLOR.hoverRed} 0px 0px 0px 3px;
          }
        `}

  background-color: #fff;
  color: #424242;
`;

export const StSnsInner = styled.div`
  font-size: 12px;
  text-align: center;
  margin: 15px 0;
  color: #757575;
`;
export const StLogoForm = styled.div`
  display: flex;
  justify-content: center;
`;

export const StButtonForm = styled.div`
  margin-bottom: 30px;
  padding-top: 2px;
`;

export const StButton = styled.button`
  cursor: pointer;
  width: 100%;
  height: 45px;
  font-weight: 700;
  font-size: 15px;
  padding-top: 2px;
  border-radius: 4px;
  border: 1px solid transparent;
  transition: color 0.1s, background-color 0.1s, border-color 0.1s;
  background-color: ${({ bc }) => bc};
  border-color: ${({ bdc }) => bdc};
  color: ${({ color }) => color};
  border: ${({ bd }) => bd};
  margin-top: ${({ mt }) => mt};
  margin-bottom: ${({ mb }) => mb};
  padding: ${({ pd }) => pd};
  &:hover {
    background-color: ${({ hc }) => hc};
  }
`;

export const StErrorMessage = styled.span`
  font-size: 14px;
  line-height: 18px;
  color: rgb(255, 119, 119);
  display: block;
  margin: 5px;
`;

export const StLoginNavi = styled.div`
  text-align: center;
  margin-top: 30px;
  font-size: 15px;
`;

export const StyledImput = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
  box-sizing: border-box;

  border: 1px solid ${COLOR.boardGray};
  border-radius: 3px;
`;
