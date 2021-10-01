import { hFetch } from 'api/methods/hFetch';
import { requestUrl } from 'api/url';

export const getPopularSearch = async () => {
  return await hFetch(`${requestUrl}/content/popular_search/`, 'get', false);
};

export const getSwiperData = async () => {
  return await hFetch(`${requestUrl}/content/home/`, 'get', false);
};
