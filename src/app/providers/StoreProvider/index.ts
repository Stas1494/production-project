import type {
    StateSchema, reduxStoreWithManager, ThunkConfig, StateSchemaKey,
} from './config/StateSchema';
import { StoreProvider } from './ui/StoreProvider';
import { AppDispatch, createReduxStore } from './config/store';

export {
    StoreProvider,
    createReduxStore,
};
export type {
    AppDispatch,
    StateSchema,
    ThunkConfig,
    StateSchemaKey,
    reduxStoreWithManager,
};
