import styled, { css } from 'styled-components';
import { COLOR } from '../../shared/color';

const sizes = {
  large: { height: '145px', padding: '8px 15px 9px' },
  medium: { height: '40px', padding: '8px 15px 9px' },
  small: { width: '138px', height: '21px', padding: '0 15px' },
};

const StInput = styled.input`
  width: 100%;
  font-size: 15px;
  transition: border-color 0.2s ease 0s, box-shadow 0.2s ease 0s,
    background-color 0.2s ease 0s;
  display: block;
  box-sizing: border-box;
  font-weight: 700;
  height: 40px;
  padding: 0px 15px;
  line-height: 40px;
  border-radius: 4px;

  background-color: rgb(255, 255, 255);
  color: rgb(66, 66, 66);

  outline: none;

  ${({ size }) =>
    size &&
    css`
      width: ${sizes[size].width};
      height: ${sizes[size].height};
      padding: ${sizes[size].padding};
    `}

  ${(props) =>
    props.isError
      ? css`
          border: 1px solid rgb(219, 219, 219);
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
`;

const StContainer = styled.div`
  width: 360px;
  height: 130px;
  margin-bottom: 30px;
  letter-spacing: -0.4px;
`;
const StTilte = styled.div`
  display: block;
  margin-bottom: 12px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;

  letter-spacing: -0.3px;

  ${(props) =>
    props.isError
      ? css`
          color: #080808;
        `
      : css`
          color: red;
        `}
`;
const StLabel = styled.div`
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 18px;
  color: #828c94;
  letter-spacing: -0.3px;
`;

const StyledErrorBlock = styled.div`
  font-size: 14px;
  line-height: 18px;
  color: rgb(255, 119, 119);
  display: block;
  margin-top: 10px;
`;

export { sizes, StInput, StContainer, StTilte, StLabel, StyledErrorBlock };
