import request from '@renderer/utils/request';
import { AxiosResponse } from 'axios';

export interface reqRecord {
  name?: string;
  startTime?: string;
  endTime?: string;
  current?: number;
  size?: number;
}

export interface ResRecord<T> {
  total: number;
  records?: T[];
}

type Result<T> = {
  code: number;
  message: string;
  data: T;
};
// 获取列表
export async function getList(
  data: reqRecord
): Promise<AxiosResponse<Result<ResRecord<object>>>> {
  return request.post('/v1/system/store/list', data);
}

// 获取详情
export async function getDetail(id: number) {
  return request.get(`/v1/system/store/info/${id}`);
}

// 新增门店
export async function addStore(data: any) {
  return request.post('/v1/system/store/add', data);
}

// 修改门店
export async function editStore(data: any) {
  return request.post('/v1/system/store/edit', data);
}

//  删除门店
export async function deleteStore(id: number) {
  return request.post('/v1/system/store/delete', { id });
}

//  导出门店
export async function exportStore(data: reqRecord) {
  const res = await request.post('/v1/system/store/exportExcel', data, {
    responseType: 'blob',
  });

  console.log('res', res);
  if (res instanceof Blob) {
    const blob = new Blob([res], { type: 'application/vnd.ms-excel' });
    const downloadElement = document.createElement('a');
    const href = window.URL.createObjectURL(blob); // 创建下载的链接
    downloadElement.href = href;
    downloadElement.download = '门店列表.xlsx'; // 下载后文件名
    document.body.appendChild(downloadElement);
    downloadElement.click(); // 点击下载
    document.body.removeChild(downloadElement); // 下载完成移除元素
    window.URL.revokeObjectURL(href); // 释放掉blob对象
  }
}
