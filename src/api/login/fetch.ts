import { hFetch } from 'api/methods/hFetch';
import { requestUrl } from 'api/url';

export const loginFetch = async (data: any) => {
  return await hFetch(`${requestUrl}/auth/login/`, 'post', false, data);
};

export const getUserInfo = async () => {
  return await hFetch(`${requestUrl}/user/profile/`, 'get', true);
};

export const resetPassword = async (data: any) => {
  return await hFetch(`${requestUrl}/auth/find/password/`, 'post', false, data);
};
