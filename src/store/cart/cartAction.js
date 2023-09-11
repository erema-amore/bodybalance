import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CARTS_API } from "../../helpers/consts";
import { getCartData } from "../../helpers/functions";

export const placeTheOrder = createAsyncThunk(
    "carts/placeTheOrder",
    async ({cart, navigate}, { dispatch }) => {
      await axios.post(CARTS_API, {cart});
      navigate("/myorder"); 
    }
  );

export const getOneOrder = createAsyncThunk(
  "carts/getOneOrder",
  async ({ id }) => {
    let res = await axios.get(`${CARTS_API}/${id}`);
    return res;
  }
);

export const getOrders = createAsyncThunk(
  'carts/getOrders',
  async () => {
    let {data} = await axios.get(CARTS_API)
    return data;
  }
);