import { useMutation, useQueryClient } from 'react-query';
import { keys } from '../utils/createQueryKey';
import api from '../axios/api';

const usePostBoard = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (payload) => {
      const { data } = await api.post(`/posts`, payload);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(keys.POST_BOARDS);
    },
  });

  return mutation;
};

export default usePostBoard;
