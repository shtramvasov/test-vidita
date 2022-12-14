import { createAsyncThunk } from '@reduxjs/toolkit'
import { IProduct } from '../types/IProduct';
import { BASE_URL } from '../utils/env';

const endpoints = ['/documents1', '/documents2']

export const fetchProducts = createAsyncThunk<IProduct[], undefined, { rejectValue: string }>(
  'products/fetchProducts',
  async () => {
    const response = await Promise.all(
      endpoints.map(endpoint => fetch(BASE_URL+endpoint).then(res => res.json()))
    )
    return response
			.flat()
			.sort((a, b) => b.delivery_date.localeCompare(a.delivery_date))
  }
)