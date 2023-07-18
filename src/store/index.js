import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cartreducer";

const store = configureStore({reducer:{cart:cartReducer}})

export default store