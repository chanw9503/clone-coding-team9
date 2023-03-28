import axios from 'axios';
import { useQuery } from 'react-query';
import { keys } from '../utils/createQueryKey';
import api from '../axios/api';

export function useGetDropBox() {
  const { data, isLoading } = useQuery({
    queryKey: keys.GET_DROP_BOX,
    queryFn: async () => {
      const data = await api.get('/dropbox');
      return data.data;
    },
  });

  return { data, isLoading };
}

export default useGetDropBox;
