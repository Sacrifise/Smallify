import { configureStore } from "@reduxjs/toolkit";
import trackCardReducer from "./slices/trackCardSlice";


export default configureStore({
    reducer: {
        trackCardId: trackCardReducer,
    },
})