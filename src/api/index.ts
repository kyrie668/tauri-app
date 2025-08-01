import userApi from './modules/user';

// 定义响应数据的接口
export interface ApiResponse<T = any> {
  code?: number;
  data: T;
  message?: string;
}

// 定义API接口
export interface Api {
  user: typeof userApi;
}

// 统一导出所有 API
const api: Api = {
  user: userApi,
};

export default api;
