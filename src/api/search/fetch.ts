import { hFetch } from 'api/methods/hFetch';
import { requestUrl } from 'api/url';

type GetSearchList = {
  keyword: string;
  type: string;
};

export const getSearchList = async (data: GetSearchList) => {
  return await hFetch(
    `${requestUrl}/content/search/?type=${data.type}&keyword=${data.keyword}`,
    'get',
    false
  );
};
