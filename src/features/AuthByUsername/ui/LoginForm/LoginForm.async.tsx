import { lazy, FC } from 'react';
import { LoginFormProps } from './LoginForm';

export const LoginFormAsync = lazy <FC<LoginFormProps>>(() => new Promise((resolve) => {
    // @ts-ignore
    // Задержка для курса, позже УДАЛИТЬ
    setTimeout(() => resolve(import('./LoginForm')), 1500);
}));
