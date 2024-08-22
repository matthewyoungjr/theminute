interface Source {
  name: string;
}

export interface Article {
  source: Source;
  author: string;
  title: string;
  description: string;
  publishedAt: string;
  content: string;
  url: string;
}

export interface Response {
  articles: Article[];
}

export interface newsTitleProps {
  params: {
    newsTitle: string;
  };
}
