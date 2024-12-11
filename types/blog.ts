export interface BlogPost {
    title: string;
    images?: string[];
    description: string;
    content: string;
    author: {
      name: string;
      avatar: string;
    };
    publishedAt: string;
    readingTime: string;
    tags: string[];
  }