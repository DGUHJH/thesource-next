import { hFetch } from 'api/methods/hFetch';
import { requestUrl } from 'api/url';

export const purchaseComplete = async (data: any) => {
  return await hFetch(`${requestUrl}/purchase/complete/`, 'post', true, data);
};

export const preparePurchase = async (data: any) => {
  return await hFetch(`${requestUrl}/purchase/prepare/`, 'post', true, data);
};

export const purchaseList = async () => {
  return await hFetch(`${requestUrl}/purchase/`, 'get', true);
};

export const prepareDirectPurchase = async (data: any) => {
  return await hFetch(`${requestUrl}/purchase/prepare/`, 'post', true, data);
};
