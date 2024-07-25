import { Action, ThunkAction, combineReducers, configureStore } from '@reduxjs/toolkit';

import authReducer from '@app/store/reducers/auth';
import { uiSlice } from '@app/store/reducers/ui';
import { persistStore } from "redux-persist";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import menuReducer from "@app/store/reducers/MenuSlice";
import dashboardReducer from './reducers/dashboard';

const authPersistConfig = {
    key: "auth",
    storage: storage,
};

const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, authReducer),
    ui: uiSlice.reducer,
    menu: menuReducer,
    dashboard: dashboardReducer
});

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
});

export const persister = persistStore(store);

export const useAppDispatch = () => useDispatch<ReduxDispatch>();
export const useAppSelector: TypedUseSelectorHook<ReduxState> = useSelector;

/* Types */
export type ReduxStore = typeof store;
export type ReduxState = ReturnType<typeof store.getState>;
export type ReduxDispatch = typeof store.dispatch;
export type ReduxThunkAction<ReturnType = void> = ThunkAction<
    ReturnType,
    ReduxState,
    unknown,
    Action
>;