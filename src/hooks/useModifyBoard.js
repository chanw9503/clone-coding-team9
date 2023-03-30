import React from 'react';
import { useMutation } from 'react-query';
import { getCookie } from '../auth/Cookie';
import api from '../axios/api';

const useModifyBoard = () => {
  const mutation = useMutation({
    mutationFn: async (postId) => {
      const data = await api.patch(`/posts/${postId}`, 'modify', {
        headers: {
          Authorization: getCookie('token'),
        },
      });

      return data;
    },
  });
  return mutation;
};

export default useModifyBoard;
