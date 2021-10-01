import { hFetch } from 'api/methods/hFetch';
import { requestUrl } from 'api/url';

export const getFaqList = async () => {
  return await hFetch(`${requestUrl}/notice/faq/`, 'get', false);
};

export const getNewsList = async () => {
  return await hFetch(`${requestUrl}/notice/press/`, 'get', false);
};

export const getNewsDetail = async (id: string) => {
  return await hFetch(`${requestUrl}/notice/press/${id}/`, 'get', false);
};
