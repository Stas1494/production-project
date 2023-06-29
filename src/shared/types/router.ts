import { RouteProps } from 'react-router-dom';
// eslint-disable-next-line st-import-plugin/layer-imports
import { UserRole } from '@/entities/User';

export type AppRouterProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[];
}
