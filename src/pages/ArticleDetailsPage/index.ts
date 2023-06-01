export {
    ArticleDetailsPageAsync as ArticleDetailsPage,
} from './ui/ArticleDetailsPage/ArticleDetailsPage.async';

export type { ArticleDetailsCommentsSchema } from './model/types/ArticleDetailsCommentsSchema';
export type { ArticleDetailsRecommendationsSchema } from './model/types/ArticleDetailsRecommendationsSchema';
export type { ArticleDetailsPageSchema } from './model/types/index';
export { getArticleCommentsIsLoading } from './model/selectors/comments';
export { getArticleCommentsError } from './model/selectors/comments';
