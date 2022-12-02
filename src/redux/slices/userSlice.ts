import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface User {
    fullName: string;
    gender: string;
    jobType: string;
    country: string;
    finance: string;
}

const initialState: User[] = [
    {
        fullName: 'Alexander Korepanov',
        gender: 'male',
        jobType: 'manager',
        country: 'Russia',
        finance: '100$'
    },
    {
        fullName: 'Masha Rasputina',
        gender: 'female',
        jobType: 'music',
        country: 'Ukraine',
        finance: '250$'
    },
    {
        fullName: 'Victoria Daineko',
        gender: 'female',
        jobType: 'teacher',
        country: 'Germany',
        finance: '270$'
    }
]

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addNewUser: (state, action: PayloadAction<User>) => {
            state.push(action.payload);
        }
        
    }
})

export const {addNewUser} = userSlice.actions;
export default userSlice.reducer;