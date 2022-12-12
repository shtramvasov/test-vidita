import { createSlice } from '@reduxjs/toolkit'
import { IProductsState } from '../types/IProductsState'

const initialState: IProductsState = {
  products: [],
  totalQuantiny: 0,
  totalVolume: 0
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {

  }
})

export default productsSlice.reducer