import { configureStore } from '@reduxjs/toolkit';
import appStateReducer from './appStateReducer';
import sectionsReducer from './sectionsReducer';
import widgetsReducer from './widgetsReducer';

const store = configureStore({
    reducer: {
        appstate: appStateReducer,
        sections: sectionsReducer,
        widget: widgetsReducer
    },
    devTools: true
});

export default store;
