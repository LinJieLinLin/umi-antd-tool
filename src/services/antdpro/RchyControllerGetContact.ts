// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /api/rchy/getContact */
export async function RchyControllerGetContact(options?: {
  [key: string]: any;
}) {
  return request<API.ContactRes>('/api/rchy/getContact', {
    method: 'GET',
    ...(options || {}),
  });
}
