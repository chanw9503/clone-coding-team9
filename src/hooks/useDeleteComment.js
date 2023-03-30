import { useMutation, useQueryClient } from 'react-query';
import { keys } from '../utils/createQueryKey';
import api from '../axios/api';
import { getCookie } from '../auth/Cookie';

const useDeleteComment= (postId, commentId) => {
  const queryClient = useQueryClient();
  const deleteComment = useMutation({
    mutationFn: async () => {
      const data  = await api.delete(`/posts/${postId}/comments/${commentId}`,{
        headers : 
          {authorization: getCookie('token')}
      }) ;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(keys.POST_DELETE_COMMENT);
    },
  });
  return deleteComment;
};

export default useDeleteComment;
