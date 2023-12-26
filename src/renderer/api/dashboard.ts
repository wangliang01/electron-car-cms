import type { TableData } from '@arco-design/web-vue/es/table/interface';
import request from '@renderer/utils/request';

export interface ContentDataRecord {
  x: string;
  y: number;
}

export function queryContentData() {
  return request.get<ContentDataRecord[]>('/v1/content-data');
}

export interface PopularRecord {
  key: number;
  clickNumber: string;
  title: string;
  increases: number;
}

export function queryPopularList(params: { type: string }) {
  return request.get<TableData[]>('/v1/popular/list', { params });
}
