import { createSlice } from '@reduxjs/toolkit';
import { getProducts } from './productsAction';

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        loading: false,
        products: [],
        oneProduct: null,
    },
    reducers: {
        clearOneProductState: (state) => {
            state.oneProduct = null;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getProducts.pending, (state) => {
            state.loading = true;
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload.res.data;
        })
        .addCase(getProducts.rejected, (state) => {
            state.loading = false;
        })
        
    }
});

export const { clearOneProductState, changePage, changeCategory, changeSearchVal } = productsSlice.actions;
export default productsSlice.reducer;