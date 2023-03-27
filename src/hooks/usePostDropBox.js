import { useMutation, useQueryClient } from 'react-query';
import { keys } from '../utils/createQueryKey';
import api from '../axios/api';

const usePostDropBox = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (payload) => {
      const { data } = await api.post(`/dropbox`, payload);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(keys.GET_DROP_BOX);
    },
  });

  return mutation;
};

export default usePostDropBox;
