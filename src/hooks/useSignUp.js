import { useMutation, useQueryClient } from 'react-query';
import { keys } from '../utils/createQueryKey';
import api from '../axios/api';

const useSignUp = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (newUser) => {
      const { data } = await api.post(`/signup`, newUser);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(keys.POST_SIGNUP);
    },
  });

  return mutation;
};

export default useSignUp;
