import { hFetch } from 'api/methods/hFetch';
import { requestUrl } from 'api/url';

export const joinFetch = async (data: any) => {
  return await hFetch(`${requestUrl}/auth/signup/`, 'post', false, data);
};

export const emailDuplicateCheckFetch = async (email: string) => {
  return await hFetch(
    `${requestUrl}/auth/duplicate/?email=${email}`,
    'get',
    false
  );
};
