import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode';
import { ReduxState } from '../store';
import { logoutUser } from '@app/services/auth';

export interface iUser {
    Id: string;
    RoleClaim: Array<string>;
    UserName: string;
}

export interface iAuthState {
    status: "idle" | "loading" | "failed";
    accessToken?: string;
    refreshToken?: string;
    user?: iUser | null;
    currentUser: boolean;
}

const initialState: iAuthState = {
    status: "idle",
    user: null,
    currentUser: false
};

export const logoutAsync = createAsyncThunk<boolean | undefined, void>(
    "api/account/logout",
    async () => {
        const response = await logoutUser();
        return response?.data;
    }
);

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        updateToken: (
            state,
            action: PayloadAction<{ accessToken: string; refreshToken: string }>
        ) => {
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            state.user = jwtDecode<iUser>(action.payload.accessToken);
            state.currentUser = true;
        },
        resetToken: (state) => {
            state.accessToken = undefined;
            state.refreshToken = undefined;
            state.user = undefined;
            state.currentUser = false;
        },
        setLoading: (state) => {
            state.status = "loading";
        },
        resetLoading: (state) => {
            state.status = "idle";
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(logoutAsync.pending, (state) => {
                state.status = "loading";
            })
            .addCase(logoutAsync.fulfilled, (state, action) => {
                state.status = "idle";
                // Handle the payload if needed
                state.accessToken = undefined;
                state.refreshToken = undefined;
                state.user = undefined;
                state.currentUser = false;
            })
            .addCase(logoutAsync.rejected, (state) => {
                state.status = "failed";
            });
    },
});

export const { updateToken, resetToken, setLoading, resetLoading } = authSlice.actions;
export const selectAuth = (state: ReduxState) => state.auth;
export default authSlice.reducer