import { createSlice } from "@reduxjs/toolkit";

export const trackCardSlice = createSlice({
    name:"trackCardState",
    initialState: {
        value: ["1109739", "2525864", "116866566", "89077555"],
        artists: [13, 13, 13, 13],
    },
    reducers: {},
})

export default trackCardSlice.reducer