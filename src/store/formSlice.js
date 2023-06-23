import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {APIRoutes, BASE_URL} from "../consts";
import {clearCart} from "./cartSlice";
import { toast } from "react-toastify";

export const sendDiscountOrder = createAsyncThunk('form/sendDiscountOrder', async (formData) => {
  const resp = await axios.post(BASE_URL + APIRoutes.sendDiscount, formData)
  if (resp.status !== 200) throw new Error('Заявка не принята, что-то пошло не так')
})

export const sendOrder = createAsyncThunk('form/sendOrder', async (formData, thunkAPI) => {
  const resp = await axios.post(BASE_URL + APIRoutes.sendOrder, formData)
  if (resp.status === 200) {
    thunkAPI.dispatch(clearCart())
  } else {
    throw new Error('Заказ не принят, что-то пошло не так')
  }
})

const formSlice = createSlice({
  name: 'forms',
  initialState: {
    isDiscountOrderSubmitting: false,
    isOrderSubmitting: false,
  },
  reducers: {},
  extraReducers: builder => builder
    .addCase(sendDiscountOrder.pending, (state, action) => {
      state.isDiscountOrderSubmitting = true
    })
    .addCase(sendDiscountOrder.fulfilled, (state, action) => {
      state.isDiscountOrderSubmitting = false
      toast.success('Заявка отправлена успешно')
    })
    .addCase(sendDiscountOrder.rejected, (state, action) => {
      state.isDiscountOrderSubmitting = false
      toast.error('Не удалось отправить заявку')
      console.log(action.error.message)
    })

    .addCase(sendOrder.pending, (state, action) => {
      state.isOrderSubmitting = true
    })
    .addCase(sendOrder.fulfilled, (state, action) => {
      toast.success('Заказ успешно отправлен')
      state.isOrderSubmitting = false
    })
    .addCase(sendOrder.rejected, (state, action) => {
      toast.error('Не удалось отправить заказ')
      state.isOrderSubmitting = false
      console.log(action.error.message)
    }),
})

export default formSlice.reducer
