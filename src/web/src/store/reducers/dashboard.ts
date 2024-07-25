import { DashboardNavData } from '@app/app/interfaces/NavData';
import { iMessages } from '@app/app/interfaces/Response';
import { fetchDashboardNavApi } from '@app/services/api/mainApi';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface DashboardState {
    data: DashboardNavData | null;
    loading: boolean;
    error: string | null;
}

const initialState: DashboardState = {
    data: null,
    loading: false,
    error: null
};

export const fetchDashboardNav = createAsyncThunk<DashboardNavData, void, { rejectValue: iMessages }>(
    'dashboard/fetchDashboardNav',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetchDashboardNavApi();

            if (response.isSucceed) {
                return response.data as DashboardNavData;
            } else {
                return rejectWithValue(response.messages);
            }
        } catch (error: any) {
            return rejectWithValue(error);
        }
    }
);

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDashboardNav.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchDashboardNav.fulfilled, (state, action: PayloadAction<DashboardNavData>) => {
                state.data = action.payload;
                state.loading = false;
            })
            .addCase(fetchDashboardNav.rejected, (state, action) => {
                state.error = (action.payload as iMessages)?.message.join(', ') || 'An error occurred';
                state.loading = false;
            });
    }
});

export default dashboardSlice.reducer;