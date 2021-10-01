import { cookies } from 'api/methods/cookies';
import { hFetch } from 'api/methods/hFetch';
import { requestUrl } from 'api/url';

const accessToken = cookies.get('access_token');
const cart = cookies.get('cart');
const cartId = cookies.get('cart_id');

export const inputCart = async (data: any) => {
  if (accessToken !== null && accessToken !== undefined && accessToken !== '') {
    return await hFetch(`${requestUrl}/cart/`, 'post', true, data);
  } else {
    return await nonLoginInputCart(data);
  }
};

export const loginInputCart = async () => {
  return await hFetch(`${requestUrl}/cart/`, 'post', true, { contents: cart });
};

export const nonLoginCart = async (data: any) => {
  return await hFetch(`${requestUrl}/cart/`, 'post', false, data);
};

export const getCartList = async () => {
  if (accessToken !== null && accessToken !== undefined && accessToken !== '') {
    return await hFetch(`${requestUrl}/cart/`, 'get', true);
  } else {
    return await hFetch(`${requestUrl}/cart/?cart_id=${cartId}`, 'get', false);
  }
};

export const delCart = async (data: any) => {
  if (accessToken !== null && accessToken !== undefined && accessToken !== '') {
    return await hFetch(`${requestUrl}/cart/bulk_delete/`, 'post', true, data);
  } else {
    return await nonLoginDelCart(data);
  }
};

export const setActiveCart = async (data: any) => {
  return await hFetch(`${requestUrl}/cart/bulk_update/`, 'post', true, data);
};

type NonLoginInputCartParams = {
  contents: string[];
};

type NonLoginInputCart = {
  data: {
    cart_id: string;
  };
};
export const nonLoginInputCart = async (data: NonLoginInputCartParams) => {
  const oldData: string[] = cart ?? [];
  const setData: string[] = [...oldData, ...data.contents];
  const uniqueData = setData.filter((element, index) => {
    return setData.indexOf(element) === index;
  });
  cookies.remove('cart');
  cookies.set('cart', uniqueData, {
    path: '/',
  });

  return nonLoginCart({ contents: uniqueData }).then(
    (res: NonLoginInputCart) => {
      cookies.remove('cart_id');
      cookies.set('cart_id', res.data.cart_id, {
        path: '/',
      });
    }
  );
};

export const nonLoginDelCart = async (data: any) => {
  const oldData: string[] = cart;
  const setData: string[] = oldData.filter((el) => !data.contents.includes(el));
  cookies.remove('cart');
  cookies.set('cart', setData, {
    path: '/',
  });
  return nonLoginCart({ contents: setData }).then((res: NonLoginInputCart) => {
    try {
      cookies.remove('cart_id');
      cookies.set('cart_id', res.data.cart_id, {
        path: '/',
      });
    } catch (e) {
      console.log(e);
    }
  });
};
