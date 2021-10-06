import { StatusType } from './status';

export type CartItem = {
  content_id: string;
  content_title: string;
  content_type: 'image' | 'video' | 'effect' | 'audio';
  file_extension: string;
  id: string;
  is_active: boolean;
  price: number;
  thumbnail: string;
};

export type CartItems = CartItem[];

export type CartType = {
  id: string;
  cart_items: CartItems;
};

export type CartListType = {
  data: CartType;
  status: StatusType;
};
