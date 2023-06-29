import { RouteProps } from 'react-router-dom';
// TODO
import { UserRole } from '@/entities/User';

export type AppRouterProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[];
}
