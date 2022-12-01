import { createSlice } from '@reduxjs/toolkit';
import { User } from 'discord-oauth2';

export enum LoginState {
    Idle, Success, Processing, Update
}

export interface DiscordAuthState {
    user?: User;
    state?: LoginState;
}

export const discordAuthSlice = createSlice({
    name: 'discordAuth',
    initialState: { state: LoginState.Update } as DiscordAuthState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },

        setState: (state, action) => {
            state.state = action.payload;
        }
    }
});

export const { setUser, setState } = discordAuthSlice.actions;
export const discordAuthReducer = discordAuthSlice.reducer;