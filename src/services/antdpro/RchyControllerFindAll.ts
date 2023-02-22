// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /api/rchy */
export async function RchyControllerFindAll(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.RchyControllerFindAllParams,
  options?: { [key: string]: any },
) {
  return request<API.ContactDto>('/api/rchy', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
