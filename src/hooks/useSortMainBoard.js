import React from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { keys } from '../utils/createQueryKey';
import api from '../axios/api';

const useGetMainBoard = (payload) => {
  const { data, isLoading } = useQuery({
    queryKey: keys.GET_SORT_MAIN_BOARD,
    queryFn: async () => {
      const data = await api.get(`/main${payload}`);
      return data.data;
    },
  });
  return { data, isLoading };
};

export default useGetMainBoard;
