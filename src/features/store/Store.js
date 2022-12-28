import { configureStore } from "@reduxjs/toolkit";

//import the slices
import cartSlice from "../rootReducer/RootReducer";

export default configureStore({
  reducer: {
    cart: cartSlice,
  },
});
