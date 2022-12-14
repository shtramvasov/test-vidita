import { fetchProducts } from '../services/fetchProducts'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProductsState } from '../types/IProductsState'
import { IProduct } from './../types/IProduct';

const initialState: IProductsState = {
	products: [],
	totalQuantiny: 0,
	totalVolume: 0,
	selectedProducts: [],
	searchQuery: '',
}

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setSearchQuery: (state, action: PayloadAction<string>) => {
			state.searchQuery = action.payload
		},
		setSelectedProducts: (state, action: PayloadAction<IProduct[]>) => {
			state.selectedProducts = action.payload
		},
		setTotalVolume: (state, action: PayloadAction<number>) => {
			state.totalVolume = action.payload
		},
		setTotalQuantiny: (state, action: PayloadAction<number>) => {
			state.totalQuantiny = action.payload
		},
	},
	extraReducers(builder) {
		builder.addCase(fetchProducts.fulfilled, (state, action) => {
			state.products = action.payload
		})
	},
})

export const { setSearchQuery, setSelectedProducts, setTotalVolume, setTotalQuantiny } = productsSlice.actions
export default productsSlice.reducer
