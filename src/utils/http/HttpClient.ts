import axios, { AxiosRequestConfig, Method } from 'axios';
import { ApiRespNormalizedProps } from './HttpCommonHanndler';
import { updateAuthorizationHeader } from './interceptors/AuthInterceptor';
import {
  normalizeErrorResponse,
  normalizeResponse,
} from './interceptors/ResponseInterceptor';

axios.interceptors.request.use((config) => {
  updateAuthorizationHeader(config.headers);
  return config;
});

axios.interceptors.response.use(
  (response) => normalizeResponse(response) as any,
  (error) => {
    return normalizeErrorResponse(error);
  }
);

export interface HttpOptionsProps {
  headersBuilder?: () => any;
  timeout?: number | null;
}

export class HttpClient {
  private readonly baseUrl: string;
  private readonly options: HttpOptionsProps;

  private buildUrl(url: string): string {
    if (url.startsWith('http') || url.startsWith('https')) {
      return url;
    }

    return `${this.baseUrl}${url}`;
  }

  private buildReqConfig<T>(
    method: Method,
    url: string,
    data?: T,
  ): AxiosRequestConfig {
    const cfg: AxiosRequestConfig = {};
    cfg.method = method;
    cfg.url = this.buildUrl(url);
    cfg.withCredentials = true;

    // default: 60 minutes
    cfg.timeout = this.options.timeout || 60 * 60 * 1000;
    if (data) {
      cfg.data = data;
    }
    return cfg;
  }

  constructor(baseUrl: string, options: HttpOptionsProps) {
    this.baseUrl = baseUrl;
    this.options = options;
  }

  /**
   * Send an createrequest to server
   * @param url URL of the create API
   * @param payload the page load of the request
   * @return Promise<ApiRespNormalizedProps<T>>
   */
  async post<T>(
    url: string,
    payload: any,
  ): Promise<ApiRespNormalizedProps<T>> {
    const cfg = this.buildReqConfig('POST', url, payload);
    if (typeof this.options.headersBuilder === 'function') {
      cfg.headers = this.options.headersBuilder();
    }

    return axios(cfg);
  }

  /**
   * Send an search request to server
   * @param url URL of the search API
   * @param payload the page load of the request
   * @return Promise<ApiRespNormalizedProps<T>>
   */
  async search<T>(
    url: string,
    payload: any
  ): Promise<ApiRespNormalizedProps<T>> {
    return this.post<T>(url, payload);
  }

  async get<T>(
    url: string,
  ): Promise<ApiRespNormalizedProps<T>> {
    const cfg = this.buildReqConfig('GET', url, null);
    if (typeof this.options.headersBuilder === 'function') {
      cfg.headers = this.options.headersBuilder();
    }

    return axios(cfg);
  }

  /**
   * Send an updating request to server
   * @param url URL of the updating API
   * @param payload the page load of the request
   * @param id an optional id of the updating request
   * @return Promise<ApiRespNormalizedProps<T>>
   */
  async put<T>(
    url: string,
    payload: any,
    id?: number | string | null,
  ): Promise<ApiRespNormalizedProps<T>> {
    const cfg = this.buildReqConfig(
      'PUT',
      [undefined, null, ''].includes(id as string) ? url : `${url}/${id}`,
      payload,
    );
    if (typeof this.options.headersBuilder === 'function') {
      cfg.headers = this.options.headersBuilder();
    }
    return axios(cfg);
  }

  async download(url: string) {
    const link = document.createElement('a');
    link.href = `${this.baseUrl}${url}`;
    link.setAttribute('download', 'file.jpg'); //or any other extension
    document.body.appendChild(link);
    link.click();
  }


  async delete<T>(
    url: string,
    payload: any,
  ): Promise<ApiRespNormalizedProps<T>> {
    const cfg = this.buildReqConfig('DELETE', url, payload);
    if (typeof this.options.headersBuilder === 'function') {
      cfg.headers = this.options.headersBuilder();
    }

    return axios(cfg);
  }

  // async downloadFileFromS3(presignedUrl: string, fileName: string) {
  // 	const link = document.createElement('a');
  // 	link.href = presignedUrl;
  // 	link.download = fileName;
  // 	link.setAttribute('download', fileName);
  // 	document.body.appendChild(link);
  // 	link.click();
  // 	document.body.removeChild(link);
  // 	link.remove();
  // }
}
