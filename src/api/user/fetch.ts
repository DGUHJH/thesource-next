import { hFetch } from 'api/methods/hFetch';
import { requestUrl } from 'api/url';

export const recentWatchContent = async () => {
  return await hFetch(`${requestUrl}/content/recent/`, 'get', true);
};

export const changeUserInfo = async (data: any) => {
  return await hFetch(`${requestUrl}/user/profile/`, 'post', true, data);
};

export const passwordChange = async (data: any) => {
  return await hFetch(
    `${requestUrl}/user/password/change/`,
    'post',
    true,
    data
  );
};

export const withdrawal = async () => {
  return await hFetch(`${requestUrl}/user/withdrawal/`, 'post', true);
};
