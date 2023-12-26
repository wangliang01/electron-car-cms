import request from '@renderer/utils/request';

export interface listRecord {
  name?: string;
  startTime?: string;
  endTime?: string;
}
export function getList(data: listRecord) {
  return request.post('/v1/system/store/list', data);
}
