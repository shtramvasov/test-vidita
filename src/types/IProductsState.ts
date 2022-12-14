import { IProduct } from './IProduct'

export interface IProductsState {
	products: IProduct[]
	totalVolume: number
	totalQuantiny: number
	selectedProducts: IProduct[]
	searchQuery: string
}
