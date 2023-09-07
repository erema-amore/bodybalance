import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CARTS_API } from "../../helpers/consts";
import { getCartData } from "../../helpers/functions";

export const placeTheOrder = createAsyncThunk(
    "carts/placeTheOrder",
    async (cart, { dispatch }) => {
      let res = await axios.post(CARTS_API, {cart});
      dispatch(getCartData);
    }
  );

//   export const getOneOrder = createAsyncThunk(
//     "carts/getOneOrder",
//     async ({ id }) => {
//       let res = await axios.get(`${CARTS_API}/${id}`);
//       return res;
//     }
//   );