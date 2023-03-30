/*
 * 작성자 : 태윤희
 * 작성 날짜 : 23-03-29
 * 작성 목적 : 댓글구현
 */

import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import { getCookie } from '../../auth/Cookie';
import useDeleteComment from '../../hooks/useDeleteComment';
// import usePatchComment from '../../hooks/usePatchComment';
import usePostComment from '../../hooks/usePostComment';
import { keys } from '../../utils/createQueryKey';
import CommentImage from './CommentImage';
import { StComment, StCommentCountFrom, StCommentId, StCommentImageInner, StCommentInputForm, StCommentInputInner, StCommentTitleBox,  StCommnetBox, StCommnetForm, StContainer, StDateForm, StForm, StInputBox, StInputBoxForm, StInputBoxInner, StInputBtn, StInputBtnForm, StInputCotents, StLikeBtn, StLikeForm, StRecordForm, StTileForm } from './Styles';
import api from '../../axios/api';
import LikeIcon from '../../components/LikeIcon/LikeIcon';


function Comment() {
    const { id } = useParams();
    const [comments, setComments] =useState('');
    const [isTokenAct, setIsTokenAct] = useState(false);
    // const [isLike, setLike] = useState(false);

    const { data, isLoading } = useQuery({
      queryKey: keys.GET_COMMENT,
      queryFn: async () => {
        const data = await api.get(`/posts/${id}/comments`);
        return data.data;
      },
    });
    
    useEffect(()=> {
      checkTokenStatus();
    }, []);

    const checkTokenStatus  = () => {
      const token = getCookie("token");
      if (token) {
        setIsTokenAct(true);
      } else {
        setIsTokenAct(false);
      }
    };

    //댓글 추가
    const mutation = usePostComment();
    const addCommentHandler =() => {
        const newComment = { 
          id,
          comment:{comment: comments}};
        mutation.mutate(newComment);
        setComments('')
        window.alert('댓글이 추가되었습니다')
    };

    //댓글 삭제
    const deleteComment = useDeleteComment(id);
    const deleteCommentHandler = async(commentId) => {
      await deleteComment.mutate(commentId)
      window.alert('댓글이 삭제되었습니다')
    };

    //댓글 수정
    // const [isEdit, setIsEdit] = useState(false);
    // const [newComment, setNewComment] = useState(false);
    // const updateComment = usePatchComment();
    // const updateCommnetHandler = () => {
    //   updateComment.mutate(newComment)
    // };
    
  return (
    <>
      <StContainer>
        <StForm>
          <StTileForm>
            댓글
            <StCommentCountFrom>1</StCommentCountFrom>
          </StTileForm>
          <StCommentInputForm>
            <StCommentInputInner>
              <CommentImage />
              <StInputBoxForm>
                <StInputBox>
                  <StInputBoxInner>
                    <StInputCotents
                      type="text"
                      maxLength={200}
                      value={comments}
                      onChange={(e) => setComments(e.target.value)}
                      placeholder="칭찬과 격려의 댓글은 작성자에게 큰 힘이 됩니다:)"
                    />
                    <StInputBtnForm>
                      <StInputBtn 
                      type="submit" 
                      onClick={addCommentHandler}>
                        입력
                      </StInputBtn>
                    </StInputBtnForm>
                  </StInputBoxInner>
                </StInputBox>
              </StInputBoxForm>
            </StCommentInputInner>
          </StCommentInputForm>

            <StCommnetBox>
            {data?.comments.map((el) => {
              return (
                <StCommnetForm key={el.id}>
                  <StCommentImageInner>
                    <CommentImage />
                  </StCommentImageInner>
                  <StCommentTitleBox>
                    <StCommentId>{el.nickname}</StCommentId>
                    {/* {isEdit ? (
                      <input 
                      type="text"
                      value = {newCommnet}
                      onChange ={(e) => setNewCommnet(e.target.value)}
                      >
                      {el.comment}
                      </input>
                    ):(
                    <StComment>
                      {el.comment}
                      </StComment>) } */}
                    <StComment>{el.comment}</StComment>
                    <StRecordForm>
                      <StDateForm>1주 전 ・</StDateForm>
                      <StLikeForm>
                        <StLikeBtn>
                          <LikeIcon width="14px"/>
                          <span />
                          <span>좋아요 ・ </span>
                        </StLikeBtn>
                      </StLikeForm>
                      <StLikeForm>
                        <StLikeBtn>답글 달기</StLikeBtn>
                        <span> ・ </span>
                      </StLikeForm>
                      {/* <StLikeForm>
                        <StLikeBtn 
                        onClick={(el)=>{
                          updateComment(el.commentId);
                          setIsEdit(!isEdit)
                        }}>
                          답글 수정</StLikeBtn>
                        <span> ・ </span>
                      </StLikeForm> */}
                      {isTokenAct ? (
                        <StLikeForm>
                          <StLikeBtn
                            onClick={() => deleteCommentHandler(el.commentId)}
                          >
                            삭제
                          </StLikeBtn>
                        </StLikeForm>
                      ) : (
                        <StLikeForm>
                          <StLikeBtn>신고</StLikeBtn>
                        </StLikeForm>
                      )}
                    </StRecordForm>
                  </StCommentTitleBox>
                </StCommnetForm>
              );
            })}
          </StCommnetBox>
        </StForm>
      </StContainer>
    </>
  );
};

export default Comment;