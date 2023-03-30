import styled from 'styled-components';
import { COLOR } from '../../shared/color';

const StyledTagListBlock = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin: 24px 0px;
`;
const StyledTagsBlock = styled.div`
  color: rgba(53, 197, 240, 0.7);
  margin: 24px 0px;
`;

const StyledVerLine = styled.div`
  border-right: 1px solid rgb(130, 140, 148, 0.5);
  height: 16px;

  text-align: center;
`;

const StyledSubject = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  line-height: 32px;
  margin-bottom: 16px;
  color: rgb(130, 140, 148);
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;

const StyledContentBlock = styled.div`
  color: rgb(47, 52, 56);
  margin: 24px 0px;
`;

const StyledMarginBlock = styled.div`
  margin-top: 50px;
  z-index: 100;
`;

const StyledTagBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 0 0 16px;
  font-size: 16px;

  color: ${COLOR.tagBlue};
`;

const StyledContainer = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 720px;
`;

const StyledWrap = styled.div`
  width: 100%;
  flex: 1;
`;

export {
  StyledTagListBlock,
  StyledTagsBlock,
  StyledVerLine,
  StyledSubject,
  StyledImage,
  StyledContentBlock,
  StyledMarginBlock,
  StyledTagBox,
  StyledContainer,
  StyledWrap,
};
