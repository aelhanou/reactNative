

import { configureStore } from '@reduxjs/toolkit'
import SignInSlice from "./store/loginSlice"


export const store = configureStore({
    reducer: {
        auth: SignInSlice,
        // dashboard:DashboardSlice,
        // reservation:ReservationSlice
    }
})