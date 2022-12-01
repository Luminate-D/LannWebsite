import { configureStore } from '@reduxjs/toolkit';
import { discordAuthReducer } from './discordAuth';

export const store = configureStore({
    reducer: {
        discordAuth: discordAuthReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
