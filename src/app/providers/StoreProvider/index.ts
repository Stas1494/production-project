import type { StateSchema, reduxStoreWithManager, ThunkConfig } from './config/StateSchema';
import { StoreProvider } from './ui/StoreProvider';
import { AppDispatch, createReduxStore } from './config/store';

export {
    reduxStoreWithManager,
    StoreProvider,
};
export type {
    AppDispatch,
    StateSchema,
    ThunkConfig,
};
