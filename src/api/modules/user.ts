import { get, post } from '@/request';
import { ApiResponse } from '..';
import { AxiosResponse } from 'axios';

// 定义用户信息接口
export interface UserInfo {
  id: number;
  username: string;
  full_name?: string;
  phone?: string;
  email?: string;
  address?: string;
  city?: string;
  country?: string;
  postal_code?: string;
  date_of_birth?: string;
  gender?: string;
  avatar_url?: string;
  created_at: string;
  updated_at: string;
}

// 定义发送验证码请求接口
export interface SendCaptchaRequest {
  authType: 'phone' | 'email';
  value: string;
}

// 定义用户注册请求接口
export interface RegisterRequest {
  username: string;
  password: string;
  // confirmPassword: string;
  email: string;
  phone?: string;
  full_name?: string;
  address?: string;
  city?: string;
  country?: string;
  postal_code?: string;
  date_of_birth?: string;
  gender?: string;
  avatar_url?: string;
}

// 定义用户登录请求接口
export interface LoginRequest {
  username: string;
  password: string;
  captcha: string;
}

// 定义验证码登录请求接口
export interface CaptchaLoginRequest {
  authType: 'phone' | 'email';
  value: string;
  captcha: string;
}

// 密码登陆接口参数
export interface PasswordLoginRequest {
  authType: 'phone' | 'email';
  value: string;
  password: string;
}

// 定义登录响应接口
export interface LoginResponse {
  accessToken: string;
  tokenType: string;
}

const userApi = {
  /**
   * 用户注册
   * @param {RegisterRequest} data - 用户注册信息
   * @returns {Promise<ApiResponse<UserInfo>>} 返回用户信息
   */
  register(data: RegisterRequest): Promise<ApiResponse<UserInfo>> {
    return post<UserInfo>('/v1/user/register', data);
  },

  /**
   * 用户登录
   * @param {LoginRequest} data - 登录信息
   * @returns {Promise<ApiResponse<LoginResponse>>} 返回token信息
   */
  login(data: LoginRequest): Promise<AxiosResponse<ApiResponse<LoginResponse>>> {
    return post<LoginResponse>('/v1/user/login', data);
  },

  // 验证码登录
  captchaLogin(data: CaptchaLoginRequest): Promise<AxiosResponse<ApiResponse<LoginResponse>>> {
    return post<LoginResponse>('/v1/user/login/captcha', data);
  },

  // 密码登录
  passwordLogin(data: PasswordLoginRequest): Promise<AxiosResponse<ApiResponse<LoginResponse>>> {
    return post<LoginResponse>('/v1/user/login/password', data);
  },

  // 发送验证码
  sendCaptcha(data: SendCaptchaRequest): Promise<AxiosResponse<ApiResponse<{ message: string }>>> {
    return post<string>('/v1/code-send', data);
  },

  /**
   * 用户退出登录
   * @returns {Promise<ApiResponse<void>>} 返回操作结果
   */
  logout(): Promise<ApiResponse<void>> {
    return post<void>('/v1/user/logout');
  },

  /**
   * 获取当前用户信息
   * @returns {Promise<AxiosResponse<UserInfo>>} 返回当前用户信息
   */
  getCurrentUser(): Promise<AxiosResponse<ApiResponse<UserInfo>>> {
    return get<UserInfo>('/v1/users/me');
  },

  /**
   * 更新用户信息
   * @param {UserInfo} data - 用户信息
   * @returns {Promise<AxiosResponse<UserInfo>>} 返回更新后的用户信息
   */
  updateUserInfo(data: UserInfo): Promise<AxiosResponse<ApiResponse<UserInfo>>> {
    return post<UserInfo>('/v1/users/setting', data);
  },

  /**
   * 上传头像
   * @param {FormData} data - 头像信息
   * @returns {Promise<AxiosResponse<ApiResponse<UserInfo>>>} 返回更新后的用户信息
   */
  uploadAvatar(data: FormData): Promise<AxiosResponse<ApiResponse<{ avatar_url: string }>>> {
    return post<{ avatar_url: string }>('/v1/user/avatar', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};

export default userApi;
