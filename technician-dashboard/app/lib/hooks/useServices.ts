import { useQueries } from '@tanstack/react-query';

import { APIs } from '@/lib/services';

export const useFetchServices = <T>(endPoints: string[]) =>
  useQueries({
    queries: endPoints.map((endPoint) => ({
      queryKey: [endPoint],
      queryFn: () => APIs.get<T>(endPoint),
    })),
  });
