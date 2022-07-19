import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { prepareCopy } from "immer/dist/internal";
import { stringify } from "querystring";
import { IProduct } from "../../../types";

const sizes = ["Extra Small", "Small", "Medium", "Large", "Extra Large"];

//  interface ICartItem {
//     product: IProduct,
//     quantity: number,
//     color: string,
//     size: number | string
// }

interface ICartItem {
  name?: string;
  productId: string;
  image: string;
  price: number;
  color: string;
  size: string | number;
  quantity: number;
}
interface IremoveAction {
  id: string;
}

const initialState: ICartItem[] =
  JSON.parse(localStorage.getItem("cart") as string) || [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    set: (state, action: PayloadAction<ICartItem[]>) => {
    //   console.log(action.payload);
      state = action.payload;
      return state;
    },
    decrement: (state, action: PayloadAction<string>) => {
      // console.log(state)
      const cartItem = state.find((item) => item.productId == action.payload);
      if (cartItem && cartItem.quantity !== 1) cartItem.quantity -= 1;
      // console.log(state)

      localStorage.setItem("cart", JSON.stringify(initialState));
    },
    increment: (state, action: PayloadAction<string>) => {
      const cartItem = state.find((item) => item.productId == action.payload);
      if (cartItem) cartItem.quantity += 1;
      // console.log(state)
      localStorage.setItem("cart", JSON.stringify(state));
    },

    add: {
      reducer(state, action: PayloadAction<ICartItem>) {
        state.push(action.payload);
        localStorage.setItem("cart", JSON.stringify(state));
      },

      prepare(item: ICartItem) {
        return {
          payload: {
            ...item,
            size: sizes[item.size as number],
          },
        };
      },
    },

    remove: (state, action: PayloadAction<string>) => {
      // const { id } = action.payloa
      state = state.filter((item) => item.productId != action.payload);
      localStorage.setItem("cart", JSON.stringify(state));
      return state;
    },
  },
});

// Action creators are generated for each case reducer function

export const { increment, decrement, add, remove, set } = cartSlice.actions;

export default cartSlice.reducer;
// export const getItem = (state,id) => state.find( item => ite)
