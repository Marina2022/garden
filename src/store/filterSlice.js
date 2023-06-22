import {createSlice} from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    withSale: false,
    sort: null,
    priceFrom: '',
    priceTo: '',
  },
  reducers: {
    setPriceFrom: (state, action)=>{
      state.priceFrom = action.payload
    },
    setPriceTo: (state, action)=>{
      state.priceTo = action.payload
    },
    setSort: (state, action)=>{
      state.sort = action.payload
    },
    setWithSale: (state, action)=>{
      state.withSale = action.payload
    },
  }
})

export const {setPriceFrom, setPriceTo, setSort, setWithSale} = filterSlice.actions

export default filterSlice.reducer
