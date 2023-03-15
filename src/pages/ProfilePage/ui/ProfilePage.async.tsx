import { lazy } from 'react';

export const ProfilePageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // Задержка для курса, позже УДАЛИТЬ
    setTimeout(() => resolve(import('./ProfilePage')), 1500);
}));
