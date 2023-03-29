import React from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { keys } from '../utils/createQueryKey';
import api from '../axios/api';
import { getCookie } from '../auth/Cookie';

const useGetEmailValidate = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: keys.GET_EMAIL_VALIDATE,
    mutationFn: async (payload) => {
      const { data } = await api.get(`/validateCheck/${payload}`, {
        headers: {
          Authorization: getCookie('emailToken'),
        },
      });
    },
    // onSuccess : () =>{
    //  queryClient.invalidateQueries(keys.GET_EMAIL_VALIDATE);
    // }
  });

  return mutation;
};

export default useGetEmailValidate;
