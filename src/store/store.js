import { configureStore } from "@reduxjs/toolkit";
import trackCardReducer from "./slices/trackCardSlice";
import  autorizationReducer from "./slices/authorizationSlice";


export default configureStore({
    reducer: {
        trackCardId: trackCardReducer,
        autorizationUserStore: autorizationReducer,
    },
})