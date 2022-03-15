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
                display: 'flex flex-col',
                align: 'items-center justify-end',
                bg: 'bg-gray-400',
                fontSize: 'text-md',
                padding: 'px-2 py-8',
                textAlign: 'text-center',
                height: 'min-h-[300px]'
            }
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
