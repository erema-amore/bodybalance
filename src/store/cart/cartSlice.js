import { createSlice } from '@reduxjs/toolkit';
import { getCartData, getProductsCountInCart } from '../../helpers/functions';
import { placeTheOrder, getOrders } from './cartAction';


export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: null,
        countProductsInCart: 0,
        orders: []
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
        })
        .addCase(placeTheOrder.rejected, (state) => {
            state.loading = false;
        })
        .addCase(getOrders.fulfilled, (state, action) => {
            state.orders = action.payload;
        })
    }
});

export const { getCart } = cartSlice.actions;
export default cartSlice.reducer;