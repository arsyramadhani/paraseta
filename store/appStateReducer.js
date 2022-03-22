import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentWorkspace: null,
    currentSection: null,
    currentWidget: null,
    sectionConfig: {
        WELCOME: true,
        COUPLES: true,
        PRAYER: false,
        COUNTDOWN: false,
        GALLERY: false,
        MESSAGE: false
    }
};

export const appStateSlice = createSlice({
    name: 'appstate',
    initialState: initialState,
    reducers: {
        setCurrentWorkspace: (state, { payload }) => {
            state.currentWorkspace = payload;
        }
    }
});

export const { setCurrentWorkspace } = appStateSlice.actions;

export default appStateSlice.reducer;
