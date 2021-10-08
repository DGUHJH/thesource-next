import { StatusType } from './status';

type Category = {
  name: string;
  id: number;
  code: string;
};

type Tag = {
  id: number;
  name: string;
};

type User = {
  email: string;
  id: number;
  nickname: string;
  photo: any;
  username: string;
};

export type ContentType = {
  categories: Category[];
  content_type: 'audio' | 'video' | 'effect' | 'image';
  created_at: string;
  has_download: boolean;
  id: string;
  preview: string;
  price: number;
  tags: Tag[];
  thumbnail: string;
  title: string;
};

export type ContentsType = ContentType[];

export type ContentsResponse = {
  data: ContentsType;
  status: StatusType;
};

export type PopularContentsType = {
  audios: ContentType[];
  images: ContentType[];
  videos: ContentType[];
  effects: ContentType[];
};

export type PopularContentsResponse = {
  data: PopularContentsType;
  status: StatusType;
};

export type ImageContentDetailType = {
  content_type: string;
  created_at: string;
  file_extension: string;
  file_size: string;
  has_commercial_rights: boolean;
  has_global_rights: boolean;
  has_no_extra_fee: boolean;
  has_resell_rights: boolean;
  id: string;
  is_cart: boolean;
  preview: string;
  price: number;
  recommends: ContentType[];
  tags: Tag[];
  title: string;
  user: User;
};

export type ImageContentDetailResponse = {
  data: ImageContentDetailType;
  status: StatusType;
};

export type AudioContentDetailType = {
  content_type: string;
  created_at: string;
  file_extension: string;
  file_size: string;
  has_commercial_rights: boolean;
  has_global_rights: boolean;
  has_no_extra_fee: boolean;
  has_resell_rights: boolean;
  id: string;
  is_cart: boolean;
  preview: string;
  price: number;
  recommends: ContentType[];
  tags: Tag[];
  title: string;
  user: User;
  thumbnail: string;
};

export type AudioContentDetailResponse = {
  data: AudioContentDetailType;
  status: StatusType;
};

export type VideoContentDetailType = {
  content_type: string;
  created_at: string;
  file_extension: string;
  file_size: string;
  has_commercial_rights: boolean;
  has_global_rights: boolean;
  has_no_extra_fee: boolean;
  has_resell_rights: boolean;
  id: string;
  is_cart: boolean;
  preview: string;
  price: number;
  recommends: ContentType[];
  tags: Tag[];
  title: string;
  user: User;
  youtube_link: string;
};

export type VideoContentDetailResponse = {
  data: VideoContentDetailType;
  status: StatusType;
};

export type MainContentsResponse = {
  data: {
    middle_swiper: ContentsType;
    popularity_swiper: ContentsType;
  };
  status: StatusType;
};

export type SearchedContentsType = {
  videos: ContentsType;
  images: ContentsType;
  audios: ContentsType;
  effects: ContentsType;
};

export type SearchedContentsResponse = {
  data: SearchedContentsType;
  status: StatusType;
};
