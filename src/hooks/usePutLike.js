import { useMutation, useQueryClient } from 'react-query';
import { getCookie } from '../auth/Cookie';
import api from '../axios/api';
import { keys } from '../utils/createQueryKey';

function usePutLike() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (payload) => {
      const data = await api.put(`/posts/${payload}/like`, undefined, {
        headers: {
          Authorization: getCookie('token'),
        },
      });

      return data;
    },
    onSuccess: (config) => {
      queryClient.invalidateQueries(keys.GET_DETAIL_BOARD);
      return config;
    },
  });

  return mutation;
}

export default usePutLike;
