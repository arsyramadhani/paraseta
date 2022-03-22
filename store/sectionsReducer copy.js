import { createSlice } from '@reduxjs/toolkit';
// w-full bg-slate-400 h-full text-white
const initialState = [
    {
        id: 'a8goao29opfoj5',
        type: 'WELCOME',
        workspaceId: '9asdnl29i39CC',
        properties: {
            preset: 'WELCOME1',
            style: {
                display: 'flex flex-col  ',
                align: 'items-center',
                justify: 'justify-end',
                bg: 'bg-gray-400',
                fontSize: 'text-md',
                padding: 'px-2 py-12',
                textAlign: 'text-center',
                height: 'min-h-[600px]'
            },
            imgUrl: 'https://images.unsplash.com/photo-1604268890386-1aa3a549c49e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
            imgFilter: 'brightness-50 grayscale'
        }
    },
    {
        id: 'kdfSfla223Va',
        type: 'PERSON',
        workspaceId: '9asdnl29i39CC',
        properties: {
            preset: 'PERSON1',
            style: {
                bg: 'bg-gray-200',
                height: 'h-[200px]',
                padding: 'px-4 py-8',
                textColor: 'text-gray-500'
            }
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
