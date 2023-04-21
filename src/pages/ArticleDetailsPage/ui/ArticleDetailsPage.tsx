import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader, ReducersList } from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { AddCommentForm } from 'features/AddCommentForm';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'shared/ui/Page/Page';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { addCommentForArticle } from '../model/services/addCommentForArticle/addCommentForArticle';
import { articleDetailsCommentsReducer, getArticleComments } from '../model/slices/articleDetailsCommentsSlice';
import cls from './ArticleDetailsPage.module.scss';
import { getArticleCommentsIsLoading } from '../model/selectors/comments';

interface ArticleDetailsPageProps {
    className?: string,
}

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};
const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article-details');
    const { id } = useParams<{ id: string}>();
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const navigate = useNavigate();

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    if (!id) {
        return (
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('Статья не найдена')}
            </Page>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
                    {t('Назад к списку')}
                </Button>
                <ArticleDetails id={id} />
                <Text className={cls.commentTitle} title={t('Комментарии')} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </Page>
        </DynamicModuleLoader>

    );
};

export default memo(ArticleDetailsPage);