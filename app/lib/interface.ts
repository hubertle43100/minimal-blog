export interface Post {
  readingTime: Int16Array;
  category: string;
  title: string;
  overview: string;
  content: any;
  _id: string;
  slug: {
    current: string;
  };
  _createdAt: string;
  thumbnail?: {
    asset: {
      url: string;
    };
    alt: string;
  };
}
