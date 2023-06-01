import type { StateSchema, ThunkConfig } from './config/StateSchema';
import { StoreProvider } from './ui/StoreProvider';
import { AppDispatch, createReduxStore } from './config/store';

export {
    createReduxStore,
    StoreProvider,
};
export type {
    AppDispatch,
    StateSchema,
    ThunkConfig,
};
