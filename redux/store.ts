import { configureStore } from "@reduxjs/toolkit";
import  RootState  from "../redux/store";
import allevents from "../redux/slice"


const Store = configureStore({
  reducer: {
    events: allevents
  }
})

export default Store
export type { RootState };
