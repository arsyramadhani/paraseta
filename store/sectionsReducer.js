import { createSlice } from '@reduxjs/toolkit';
// w-full bg-slate-400 h-full text-white
const initialState = [
    {
        id: 'a8goao29opfoj5',
        type: 'WELCOME',
        workspaceId: '9asdnl29i39CC',
        index: 0,
        properties: {
            preset: 'WELCOME1',
            isVisible: true,
            style: {
                display: 'flex flex-col  relative',
                align: 'items-center',
                justify: 'justify-center',
                bg: 'bg-gray-600',
                fontSize: 'text-md',
                padding: 'px-2 py-12 ',
                textAlign: 'text-center',
                height: 'min-h-[600px]'
            },
            imgUrl: 'https://images.unsplash.com/photo-1559484849-772cb2860a2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=80',
            imgFilter: 'brightness-[50%] '
        }
    },
    {
        id: 'a8goao29oxxapfoj5',
        type: 'COUPLES',
        workspaceId: '9asdnl29i39CC',
        index: 0,
        properties: {
            preset: 'WELCOME1',
            isVisible: true,
            style: {
                display: 'flex flex-col  ',
                align: 'items-center',
                justify: 'justify-center',
                bg: 'bg-gray-300',
                fontSize: 'text-md',
                padding: 'px-2 py-12',
                textAlign: 'text-right',
                height: 'min-h-[600px]'
            },
            imgUrl: 'https://images.unsplash.com/photo-1604268890386-1aa3a549c49e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
            imgFilter: 'brightness-50 grayscale'
        }
    }
];

export const sectionsSlice = createSlice({
    name: 'sections',
    initialState: initialState,
    reducers: {}
});

// export const {} = sectionsSlice.actions;

export default sectionsSlice.reducer;
