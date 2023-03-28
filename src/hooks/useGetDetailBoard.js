import React from 'react';
import { useQuery } from 'react-query';
import { keys } from '../utils/createQueryKey';
import api from '../axios/api';

const useGetDetailBoard = () => {
  const { data, isLoading } = useQuery({
    queryKey: keys.GET_DETAIL_BOARD,
    queryFn: async () => {
      const data = await api.get('/post');
      return data.data;
    },
  });

  return { data, isLoading };
};

export default useGetDetailBoard;
