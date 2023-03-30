import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import api from '../axios/api';

const useLogin = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (paylaod) => {
      const response = await api.post('/login', paylaod);
      return response;
    },
    onSuccess: (e) => {
      queryClient.invalidateQueries('login');
    },
    onError: () => {
      queryClient.invalidateQueries('login');
    },
    onSettled: (e) => {
      if (e.response?.status === 500 || e.response?.status === 400) {
      } else if (e.name === 'AxiosError') {
        alert('서버와 연결을 확인해 주세요');
      }
    },
  });

  return mutation;
};

export default useLogin;
