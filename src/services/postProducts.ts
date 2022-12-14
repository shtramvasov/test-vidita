import { BASE_URL } from '../utils/env'

export const postProducts = async (endpoint: string, data: {}) => {
	try {
		const response = await fetch(BASE_URL + endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    console.log(`Эндпоинт: ${endpoint}`)
    console.log(`Дата: ${JSON.stringify(data)}`)
    return response.json()
	} catch (error) {
		console.error(error)
	}
}
