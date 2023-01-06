import { UseQueryOptions } from '@tanstack/react-query/src/types'
import { QueryObserverSuccessResult, useQuery } from '@tanstack/react-query'
import { QueryFunction, QueryKey } from '@tanstack/query-core'

export const useSuspenseQuery = <
    TQueryFnData,
    TError,
    TData = TQueryFnData,
    TQueryKey extends QueryKey = QueryKey,
    >(queryKey: TQueryKey,
    queryFn: QueryFunction<TQueryFnData, TQueryKey>,
    options?: Omit<
    UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
    'queryKey' | 'queryFn'
    >): QueryObserverSuccessResult<TData, TError> => {
  // 서스펜스로 데이터 호출 시 리턴된 data는 undefined가 아닌 무조건 데이터가 들어오기 때문에 그에 맞게 타입 설정
  return useQuery(queryKey, queryFn, { ...options, suspense: true }) as unknown as QueryObserverSuccessResult<TData, TError>
}
