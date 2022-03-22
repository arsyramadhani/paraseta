import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        id: '21faf4566',
        sectionId: 'a8goao29opfoj5',
        components: 'WYSIWYG',
        properties: {
            value: 'Wedding of',
            style: {
                textColor: 'text-white',
                fontStyle: 'italic'
            }
        }
    },
    {
        id: '8fgiasjd',
        sectionId: 'a8goao29opfoj5',
        components: 'WYSIWYG',
        properties: {
            value: 'Indira and Razima',
            style: {
                textColor: 'text-white',
                fontSize: 'text-2xl',
                fontWeight: 'font-bold'
            }
        }
    },
    {
        id: '21faf4xxa566',
        sectionId: 'a8goao29opfoj5',
        components: 'WYSIWYG',
        properties: {
            value: 'We are sadasssd to invite you',
            style: {
                textColor: 'text-white',
                padding: 'pt-4'
            }
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
