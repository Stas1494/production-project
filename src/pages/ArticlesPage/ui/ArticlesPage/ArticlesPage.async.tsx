import { lazy } from 'react';

export const ArticlesPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // Задержка для курса, позже УДАЛИТЬ
    setTimeout(() => resolve(import('./ArticlesPage')), 400);
}));
