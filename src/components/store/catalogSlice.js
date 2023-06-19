import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from "../../consts";

export const getCategories = createAsyncThunk('catalog/getCategories', async () => {
  const data = await axios(BASE_URL + 'categories/all')
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
      state.isLoading = true
    })
    .addCase(getCategories.fulfilled, (state, action) => {
      state.isLoading = false
      state.categories = action.payload
    })
    .addCase(getCategories.rejected, (state, action) => {
      state.isLoading = false
      console.log('Категории не загрузились')
    }),
})

export const selectCategories = state=>state.catalog.categories

export default catalogSlice.reducer
