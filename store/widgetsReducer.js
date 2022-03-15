import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        id: '21faf4566',
        sectionId: 'a8goao29opfoj5',
        type: 'text',
        components: 'ModuleTextArea',
        properties: {
            preset: 'welcome_1',
            title: 'Welcome Home',
            style: {}
        }
    },
    {
        id: '21asxxfaf4a',
        sectionId: 'a8goao29opfoj5',
        type: 'text',
        components: 'ModuleTextArea',
        properties: {
            preset: 'welcome_1',
            title: 'Welcome Home',
            style: {
                fontSize: 'text-2xl',
                fontWeight: 'font-bold'
            }
        }
    },
    {
        id: '21asxxxxa23a',
        sectionId: 'kdfSfla223Va',
        type: 'text',
        components: 'ModuleTextArea',
        properties: {
            preset: 'welcome_1',
            title: 'Welcome Home',
            style: {}
        }
    }
];

export const widgetSlice = createSlice({
    name: 'widgets',
    initialState: initialState,
    reducers: {}
});

// export const {} = widgetSlice.actions;

export default widgetSlice.reducer;
