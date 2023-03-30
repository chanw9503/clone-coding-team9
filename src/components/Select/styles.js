import styled, { css } from 'styled-components';

const SelectInput = styled.select`
  font-size: 15px;
  width: 100%;
  transition: border-color 0.2s, box-shadow 0.2s, background-color 0.2s;
  display: block;
  box-sizing: border-box;
  height: 40px;
  line-height: 40px;
  border-radius: 4px;

  background-color: #fff;
  color: #424242;
  padding: 0 15px;
  padding-right: 30px;
  ${({ validate }) =>
    validate
      ? css`
          border: 1px solid #dbdbdb;
        `
      : css`
          border: 1px solid red;
        `}
`;

export { SelectInput };
