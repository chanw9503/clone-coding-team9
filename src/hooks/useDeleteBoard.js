import { useMutation, useQueryClient } from 'react-query';
import { keys } from '../utils/createQueryKey';
import api from '../axios/api';
import { getCookie } from '../auth/Cookie';

const useDeleteBoard = (postId, commentId) => {
  const queryClient = useQueryClient();
  const deleteComment = useMutation({
    mutationFn: async () => {
      const data = await api.delete(`/posts/${postId}`, {
        headers: { authorization: getCookie('token') },
      });
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(keys.GET_MAIN_BOARD);
    },
  });
  return deleteComment;
};

export default useDeleteBoard;
