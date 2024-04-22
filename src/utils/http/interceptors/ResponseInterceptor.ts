import { AxiosError, AxiosResponse } from 'axios';
import {
  ApiRespNormalizedProps,
  IApiResponse
} from '../HttpCommonHanndler';

export function normalizeResponse<T>(
  response: AxiosResponse<IApiResponse<T>, any>
): ApiRespNormalizedProps<T> {
  const result: ApiRespNormalizedProps<T> = {
    success: true,
    data: response.data?.data as T,
  };
  return result;
}

export function normalizeErrorResponse<T>(
  error: AxiosError
): ApiRespNormalizedProps<T> {
  const responseErr = (error.response?.data as IApiResponse<T>) || {};

  const result: ApiRespNormalizedProps<T> = {
    success: false,
    errorCode: responseErr.resultCode || '99',
    errorMessage: responseErr.resultMessage || 'Something went wrong',
  };
  return result;
}
