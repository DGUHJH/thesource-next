import { cookies } from 'api/methods/cookies';

type FetchType = 'post' | 'get';

export const hFetch = async (
  url: string,
  type: FetchType,
  authorization: boolean,
  body?: any
) => {
  const accessToken = cookies.get('access_token');

  let headers;

  if (authorization) {
    headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    };
  } else {
    headers = {
      'Content-Type': 'application/json',
    };
  }

  return await fetch(url, {
    method: type,
    body: JSON.stringify(body),
    headers,
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
};

export const hFormFetch = async (
  url: string,
  type: FetchType,
  authorization: boolean,
  body?: any
) => {
  let headers;

  if (authorization) {
    headers = {
      'Content-Type':
        'multipart/form-data; boundary=someArbitraryUniqueString; charset=utf-8;',
      Authorization: `Bearer ${cookies.get('access_token')}`,
    };
  } else {
    headers = {
      'Content-Type':
        'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW; charset=utf-8;',
    };
  }

  return await fetch(url, {
    method: type,
    body: JSON.stringify(body),
    headers,
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
};
