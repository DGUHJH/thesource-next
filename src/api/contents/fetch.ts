import { hFetch } from 'api/methods/hFetch';
import { requestUrl } from 'api/url';

export const getPopularityList = async () => {
  return await hFetch(`${requestUrl}/content/popular/`, 'get', false);
};

export const getVideoList = async (
  page: number,
  category?: string,
  keyword?: string
) => {
  const url = keyword
    ? `${requestUrl}/content/video/?page=${page}&category=${category}&keyword=${keyword}`
    : `${requestUrl}/content/video/?page=${page}&category=${category}`;
  return await hFetch(url, 'get', false);
};

export const getVideoDetail = async (uid: string) => {
  return await hFetch(`${requestUrl}/content/video/${uid}`, 'get', true);
};

export const getImageList = async (
  page: number,
  category?: string,
  keyword?: string
) => {
  const url = keyword
    ? `${requestUrl}/content/image/?page=${page}&category=${category}&keyword=${keyword}`
    : `${requestUrl}/content/image/?page=${page}&category=${category}`;

  return await hFetch(url, 'get', false);
};

export const getImageDetail = async (uid: string) => {
  return await hFetch(`${requestUrl}/content/image/${uid}`, 'get', true);
};

export const getEffectList = async (
  page: number,
  category?: string,
  keyword?: string
) => {
  const url = keyword
    ? `${requestUrl}/content/effect/?page=${page}&category=${category}&keyword=${keyword}`
    : `${requestUrl}/content/effect/?page=${page}&category=${category}`;

  return await hFetch(url, 'get', false);
};

export const getEffectDetail = async (uid: string) => {
  return await hFetch(`${requestUrl}/content/effect/${uid}`, 'get', true);
};

export const getAudioList = async (
  page: number,
  category?: string,
  keyword?: string
) => {
  const url = keyword
    ? `${requestUrl}/content/audio/?page=${page}&category=${category}&keyword=${keyword}`
    : `${requestUrl}/content/audio/?page=${page}&category=${category}`;

  return await hFetch(url, 'get', false);
};

export const getAudioDetail = async (uid: string) => {
  return await hFetch(`${requestUrl}/content/audio/${uid}`, 'get', true);
};

type DownloadFreeContentProps = {
  status: {
    type: string;
    message: string;
  };
  data: {
    url: string;
  };
};

export const downloadFreeContent = async (uid: string) => {
  return await hFetch(`${requestUrl}/content/download/${uid}/`, 'get', true);
};

export const downloadContent = (uid: string) => {
  hFetch(`${requestUrl}/content/download/${uid}/`, 'get', true).then(
    (res: DownloadFreeContentProps) => {
      if (res.data !== undefined && res.data !== null) {
        window.location.replace(res?.data.url);
      } else {
        alert('로그인이 필요한 서비스입니다.');
      }
    }
  );
};

function multiDownload(uri: string) {
  const link = document.createElement('a');
  link.href = uri;
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

let i = 0; //  set your counter to 1

const myLoop = (urls: string[]) => {
  setTimeout(() => {
    window.open(urls[i]);
    i += 1;
    if (i < urls.length) {
      myLoop(urls);
    }
  }, 100);
};

export const downloadAllContent = (data: any) => {
  hFetch(`${requestUrl}/content/download/multiple/`, 'post', true, data).then(
    async (res: any) => {
      if (res.data !== undefined && res.data !== null) {
        i = 0;
        myLoop(res.data.urls);
      } else {
        alert('로그인이 필요한 서비스입니다.');
      }
    }
  );
};
