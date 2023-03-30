import { useMutation, useQueryClient } from 'react-query';
import { keys } from '../utils/createQueryKey';
import api from '../axios/api';
import { getCookie } from '../auth/Cookie';

const usePostBoard = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (payload) => {
      const response = await api.post(`/posts`, payload, {
        headers: {
          Authorization: getCookie('token'),
        },
      });
      return response;
    },
    onSuccess: (config) => {
      alert(config.data.message);
      queryClient.invalidateQueries(keys.POST_BOARDS);
      queryClient.invalidateQueries(keys.GET_MAIN_BOARD);
    },
  });

  return mutation;
};

export default usePostBoard;
