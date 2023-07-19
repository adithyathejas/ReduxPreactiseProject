import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cartreducer";
import Uireducer from "./Uireducer";

const store = configureStore({reducer:{cart:cartReducer,ui:Uireducer}})

export default store