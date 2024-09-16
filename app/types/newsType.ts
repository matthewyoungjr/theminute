interface Source {
  name: string;
}

export interface Article {
  article_id: string; 
  title: string;
  link: string;
  image_url: string;
  content: string; 
  pubDate: string; 
  source_name: string;
  creator: string; 
}

export interface Response {
  totalResults: number;
  results: Article[];
}

export interface newsTitleProps {
  params: {
    newsTitle: string;
  };
}
