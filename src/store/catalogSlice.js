import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {APIRoutes, BASE_URL} from "../consts";

export const getCategories = createAsyncThunk('catalog/getCategories', async () => {
  const data = await axios(BASE_URL + APIRoutes.allCategories)
  return data.data
})

export const getProducts = createAsyncThunk('catalog/getProducts', async () => {
  const data = await axios(BASE_URL + APIRoutes.allProducts)
  return data.data
})



const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    products: [],
    productsAreLoading: true,
    categoriesAreLoading: true,
    categories: [],
  },
  reducers: {},
  extraReducers: builder => builder
    .addCase(getCategories.pending, (state, action) => {
      state.categoriesAreLoading = true
    })
    .addCase(getCategories.fulfilled, (state, action) => {
      state.categoriesAreLoading = false
      state.categories = action.payload
    })
    .addCase(getCategories.rejected, (state, action) => {
      state.categoriesAreLoading = false
      console.log('Категории не загрузились')
    })

    .addCase(getProducts.pending, (state, action) => {
      state.productsAreLoading = true
    })
    .addCase(getProducts.fulfilled, (state, action) => {
      state.productsAreLoading = false
      state.products = action.payload
    })
    .addCase(getProducts.rejected, (state, action) => {
      state.productsAreLoading = false
      console.log('Товары не загрузились')
    })


})

export const selectCategories = state => state.catalog.categories
export const selectProducts = state => state.catalog.products

export default catalogSlice.reducer
