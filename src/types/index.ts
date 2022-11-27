export interface TimeStamps {
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface ImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: string;
  size: number;
  width: number;
  height: number;
}

export interface Image {
  id: number;
  attributes: {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
      [key: string]: ImageFormat;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl?: string;
    provider: string;
    provider_metadata?: string;
    createdAt: string;
    updatedAt: string;
  };
}

export interface ITag {
  id: number;
  attributes: {
    name: string;
    bg_color: string;
    text_color: string;
    createdAt: string;
    updatedAt: string;
  };
}

export interface Images {
  data: Array<Image>;
}

export interface ICategoryAttributes extends TimeStamps {
  title: string;
  slug: string;
}

export interface ICategory {
  id: number;
  attributes: ICategoryAttributes;
}

export interface IProjectAttributes extends TimeStamps {
  name: string;
  slug: string;
  short_description: string;
  description: string;
  live_url?: string;
  repo_url?: string;
  thumbnail: {
    data: Image;
  };
  screenshots: { data: Array<Image> };
  tags: { data: Array<ITag> };
}

export interface IProject {
  id: number;
  attributes: IProjectAttributes;
}

export interface IProjectAttributes extends TimeStamps {
  title: string;
  description: string;
  content: string;
  slug: string;
  thumbnail: {
    data: Image;
  };
  category: {
    data: ICategory
  };
}

export interface IPost {
  id: number;
  attributes: IProjectAttributes;
}

export interface ICollectionResponse<T> {
  data: T;
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
