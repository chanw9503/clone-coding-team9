import React from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { keys } from '../utils/createQueryKey';
import api from '../axios/api';
import { getCookie, removeCookie } from '../auth/Cookie';

const useGetEmailValidate = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: keys.GET_EMAIL_VALIDATE,
    mutationFn: async (payload) => {
      const config = await api.get(`/validateCheck/${payload}`, {
        headers: {
          emailToken: getCookie('emailToken'),
        },
      });
    },
    onSuccess: () => {
      removeCookie('emailToken');
    },
  });

  return mutation;
};

export default useGetEmailValidate;
