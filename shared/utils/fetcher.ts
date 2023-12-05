import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import axiosInstance from './axiosInstance'

export interface IResponse {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string
}

const Fetcher = async (props: Partial<AxiosRequestConfig>) => {
  try {
    const response = await axiosInstance<Response, AxiosResponse<IResponse>>(props);
    // const response = await axiosInstance<Response>(props)

    return response.data
  } catch (e: unknown) {
    if (e instanceof AxiosError) {
      return Promise.reject(e);
    }
    throw e;
  }
}

export default Fetcher