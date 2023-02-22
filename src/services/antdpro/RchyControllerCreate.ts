// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 POST /api/rchy */
export async function RchyControllerCreate(
  body: API.CreateRchyDto,
  options?: { [key: string]: any },
) {
  return request<string>('/api/rchy', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
