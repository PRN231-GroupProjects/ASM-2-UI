import { HttpClient } from './HttpClient';

/* API Response */
export interface IErrorResponseItem {
  field: string[];
  code: string;
  message: string;
  details: (string | number)[];
}

export interface IErrorResponseRow {
  id?: string | number;
  errorItems: IErrorResponseItem[];
}

export interface IErrorDetail {
  rowId?: string | number | null;
  errorFields: IErrorField;
}

export interface IErrorField {
  [fieldName: string]: IErrorFieldDetail;
}

export interface IErrorFieldDetail {
  code: string;
  message: string;
  placeholders: any[];
}

// export interface IError {

// }
export interface IApiResponse<R> {
  success: boolean;
  data?: R;
  resultCode?: string;
  resultMessage?: string;
}
export interface ApiRespNormalizedProps<T> {
  success: boolean;
  data?: T;
  errorCode?: string;
  errorMessage?: string;
}

export interface IHttpCommonErrorIndicator<E> {
  path?: string;
  error: E;
}

export const http = new HttpClient(import.meta.env.VITE_BASE_URL, {});

/**
 *
 * @param {T} payload The request parametter
 * @return {string}
 */
export function generateQueryParams(payload: any): string {
  const keys = Object.keys(payload);
  /**
   * Looking at the RFC-3986 standard for URIs there's the following information in 2.3
   * https://github.com/axios/axios/issues/1111
   */
  return keys
    .map(
      (key, i) =>
        `${i === 0 ? '?' : ''}${[key]}=${encodeURIComponent(payload[key])}`
    )
    .join('&');
}
