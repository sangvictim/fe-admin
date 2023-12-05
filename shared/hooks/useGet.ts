import { AxiosError, AxiosRequestConfig } from 'axios'
import useSWR from 'swr'
import qs from 'query-string';

const useGet = <Response>(props: Partial<AxiosRequestConfig>) => {
  const { url, params } = props;
  const urlWithParams = params ? `${url}?${qs.stringify(params)}` : url;
  return useSWR<Response, unknown>(urlWithParams, {
    onError: e => {
      if (e instanceof AxiosError) {
        alert(e.response?.data?.message);
      }
    },
  });
}

export default useGet
