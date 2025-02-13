import { createSlice } from "@reduxjs/toolkit";

export const autorizationSlice = createSlice({
    name: "autorizationState",
    initialState: {
        isAutorized: false,
        user_login: "HI",
        user_passw: "",
    },
    reducers: {
        checkObj(state, action){
            state.user_login = action.payload.login;
            state.user_passw = action.payload.password;
            state.isAutorized = true;
        }
    }
})

export const {checkObj} = autorizationSlice.actions

export default autorizationSlice.reducer