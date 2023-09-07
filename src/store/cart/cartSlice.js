import { createSlice } from '@reduxjs/toolkit';
import { getCartData, getProductsCountInCart } from '../../helpers/functions';
import { placeTheOrder } from './cartAction';
import { act } from 'react-dom/test-utils';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: null,
        countProductsInCart: 0,
        carts: []
    },
    reducers: {
        getCart: (state) => {
            state.cart = getCartData();
            state.countProductsInCart = getProductsCountInCart();
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(placeTheOrder.pending, (state) => {
            state.loading = true;
        })
        .addCase(placeTheOrder.fulfilled, (state, action) => {
            state.loading = false;
            state.carts = action.payload.res.data;
            console.log(action.payload.res)
        })
        .addCase(placeTheOrder.rejected, (state) => {
            state.loading = false;
        })
    }
});

export const { getCart } = cartSlice.actions;
export default cartSlice.reducer;