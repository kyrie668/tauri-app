import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import { useNavigate } from 'react-router';
import useModalStore from './store/modal-store';

// 定义响应数据的接口
export interface ApiResponse<T = any> {
  code: number;
  data: T;
  message: string;
}

/**
 * @description 请求基础配置
 */
const axiosInstance: AxiosInstance = axios.create({
  baseURL: '/api', // API 基础 URL
  timeout: 5000, // 超时时间 5s
  withCredentials: true, // 允许跨域携带凭证
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
  responseType: 'json', // 设置响应数据类型为 JSON
});

/**
 * @description 请求拦截器
 */
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token');
    if (token && config.headers) {
      config.headers['X-Forwarded-User'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error('请求错误:', error);
    return Promise.reject(error);
  }
);

/**
 * @description 响应拦截器
 */
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log('response', response);
    return Promise.resolve(response);
  },
  (error) => {
    console.error('请求出错：', error);
    if (error.response && error.response.status === 401) {
      // if (!window.location.href.includes('/home')) {
      //   window.location.href = '/#/'; // 使用 window.location.href 跳转至home页面
      // }
      console.error('未授权，正在跳转到登录页面...');
      // 清除认证信息
      localStorage.removeItem('token');
      sessionStorage.removeItem('token');
      // 直接使用store的实例方法
      const store = useModalStore.getState();
      store.setIsLoginModalOpen(true);
    }
    return Promise.reject(error);
  }
);

/**
 * @description 封装 GET 请求
 */
export function get<T>(
  url: string,
  params?: object,
  responseType?: string
): Promise<AxiosResponse<ApiResponse<T>>> {
  return axiosInstance
    .get<ApiResponse<T>>(url, {
      params,
      responseType: responseType as
        | 'json'
        | 'blob'
        | 'text'
        | 'arraybuffer'
        | 'document'
        | 'stream',
    })
    .then((response) => response);
}

/**
 * @description 封装 POST 请求
 */
export function post<T>(
  url: string,
  data?: object,
  config?: object,
  option: any = {}
): Promise<AxiosResponse> {
  return axiosInstance.post<ApiResponse<T>>(url, data, config).then((response) => response);
}

/**
 * @description 封装 PUT 请求
 */
export function put<T>(url: string, data?: object, config?: object): Promise<AxiosResponse> {
  return axiosInstance.put<ApiResponse<T>>(url, data, config).then((response) => response);
}

/**
 * @description 封装 DELETE 请求
 */
export function del<T>(url: string, data?: object, config?: object): Promise<AxiosResponse> {
  return axiosInstance
    .delete<ApiResponse<T>>(url, { data, ...config })
    .then((response) => response);
}

// 配置上传的formData格式
const formDataConfig = {
  headers: { 'Content-Type': 'multipart/form-data' },
};

/**
 * @description 封装上传文件请求
 */
export function uploadFile<T>(url: string, data: FormData): Promise<AxiosResponse> {
  return axiosInstance.post<T>(url, data, formDataConfig).then((response) => response);
}

export default axiosInstance;
