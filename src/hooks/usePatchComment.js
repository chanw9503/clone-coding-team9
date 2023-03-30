import { useMutation, useQueryClient } from 'react-query';
import { keys } from '../utils/createQueryKey';
import api from '../axios/api';
import { getCookie } from '../auth/Cookie';

const usePatchComment= (postId, commentId) => {
  const queryClient = useQueryClient();
  const updateComment = useMutation({
    mutationFn: async () => {
      const { data } = await api.delete(`/posts/${postId}/comments/${commentId}`, {
        headers : 
          {authorization: getCookie('token')}
      }) ;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(keys.POST_PATTH_COMMENT);
    },
  });
  return updateComment;
};

export default usePatchComment;