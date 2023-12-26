// import axios from 'axios';
import type { RouteRecordNormalized } from 'vue-router';
import { UserState } from '@renderer/store/modules/user/types';
import request from '@renderer/utils/request';

export interface LoginData {
  username: string;
  password: string;
}

export interface LoginRes {
  token: string;
}
export function login(data: LoginData) {
  return request.post<LoginRes>('/v1/user/login', data);
}

export function logout() {
  return request.post<LoginRes>('/v1/user/logout');
}

export function getUserInfo() {
  return request.get<UserState>('/v1/user/info');
}

export function getMenuList() {
  return request.post<RouteRecordNormalized[]>('/v1/user/menu');
}
