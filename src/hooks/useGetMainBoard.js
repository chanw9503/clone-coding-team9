import React from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { keys } from '../utils/createQueryKey';
import api from '../axios/api';

const useGetMainBoard = () => {
  const queryClient = useQueryClient();

  const { isLoading, data } = useQuery({
    queryKey: keys.GET_MAIN_BOARD,
    queryFn: async () => {
      const data = await api.get('/main');
      return data.data;
    },
  });
  return { data, isLoading };
};

export default useGetMainBoard;
