import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        id: '21faf4566',
        sectionId: 'a8goao29opfoj5',
        type: 'text',
        components: 'ModuleTextArea',
        properties: {
            preset: 'welcome_1',
            value: 'Wedding of',
            style: {
                textColor: 'text-white'
            }
        }
    },
    {
        id: '21asxxfaf4a',
        sectionId: 'a8goao29opfoj5',
        type: 'text',
        components: 'ModuleTextArea',
        properties: {
            preset: 'welcome_1',
            value: 'Andira & Rizka',
            style: {
                fontSize: 'text-3xl ',
                textColor: 'text-white',
                fontWeight: 'font-bold '
            }
        }
    },
    {
        id: '21faf4566',
        sectionId: 'a8goao29opfoj5',
        type: 'date',
        components: 'ModuleTextArea',
        properties: {
            preset: 'date1',
            value: new Date().toString(),
            style: {
                textColor: 'text-white',
                fontSize: 'text-sm italic '
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
            value: 'Welcome Home',
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
