interface ArticleBlockBase {
  id: string
  type: 'TEXT' | 'WARNING' |'IMAGE' | 'CODE'
}

interface ArticleCodeBlock extends ArticleBlockBase {
  type: 'CODE'
  code: string
}

interface ArticleImageBlock extends ArticleBlockBase {
  type: 'IMAGE'
  src: string
  title?: string
}

interface ArticleTextBlock extends ArticleBlockBase {
  type: 'TEXT'
  title?: string
  paragraphs: string[]
}

interface ArticleWarningBlock extends ArticleBlockBase {
  type: 'WARNING'
  color: string
  title: string
  paragraphs: string[]
}

export type ArticleBlockType = ArticleWarningBlock | ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock

export enum ArticleType {
  IT = 'IT',
  ECONOMICS = 'ECONOMICS',
  SCIENCE = 'SCIENCE',
  JS = 'JS'
}

export interface Article {
  id: string
  title: string
  subtitle: string
  img: string
  views: number
  createdAt: string
  type: ArticleType[]
  blocks: ArticleBlockType[]
}
