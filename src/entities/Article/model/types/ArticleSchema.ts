import { Article } from 'entities/Article';

export interface ArticleSchema {
  isLoading: boolean
  error?: string
  data?: Article
}
