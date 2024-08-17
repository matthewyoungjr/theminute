interface Source {
  name: string;
}

export interface Article {
  title: string;
  description: string;
  content: string;
  image: string;
  source: Source;
}

export interface Response {
  articles: Article[];
}

export interface newsTitleProps {
  params: {
    newsTitle: string;
  };
}
