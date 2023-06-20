import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {APIRoutes, BASE_URL} from "../consts";

export const sendDiscountOrder = createAsyncThunk('form/sendDiscountOrder', async (formData) => {
  const resp = await axios.post(BASE_URL + APIRoutes.sendDiscount, formData)
  if (resp.data !== 'OK') throw new Error('Заявка не принята, что-то пошло не так')
})

const formSlice = createSlice({
  name: 'forms',
  initialState: {
    isDiscountOrderSubmitting: false
  },
  reducers: {},
  extraReducers: builder => builder
    .addCase(sendDiscountOrder.pending, (state, action) => {
      state.isDiscountOrderSubmitting = true
    })
    .addCase(sendDiscountOrder.fulfilled, (state, action) => {
      state.isDiscountOrderSubmitting = false
    })
    .addCase(sendDiscountOrder.rejected, (state, action) => {
      state.isDiscountOrderSubmitting = false
      console.log('Заявка не отправилась')
    }),
})


export default formSlice.reducer
