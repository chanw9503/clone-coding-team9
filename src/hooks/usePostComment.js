import { useMutation, useQueryClient } from 'react-query';
import { keys } from '../utils/createQueryKey';
import api from '../axios/api';
import { getCookie } from '../auth/Cookie';

const usePostComment= () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (payload) => {
      const data  = await api.post(`/posts/${payload.id}/comments`, payload.comment, {
        headers : 
          {authorization: getCookie('token')}
      }) ;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(keys.POST_ADD_COMMENT);
    },
  });
  return mutation;
};

export default usePostComment;