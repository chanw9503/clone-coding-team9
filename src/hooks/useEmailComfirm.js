import { useMutation, useQueryClient } from 'react-query';
import { keys } from '../utils/createQueryKey';
import api from '../axios/api';
import { setCookie } from '../auth/Cookie';

const useEmailComfirm = () => {
  const queryClient = useQueryClient();
  const confirmSendEmail = useMutation({
    mutationFn: async (userEmail) => {
      const { data } = await api.post(`/validate`, userEmail);
      setCookie('emailToken', data.emailToken);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(keys.POST_EMAIL_COMFIRM);
    },
  });

  return confirmSendEmail;
};

export default useEmailComfirm;
