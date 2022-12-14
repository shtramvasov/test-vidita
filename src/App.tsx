import { Space } from 'antd'
import { useEffect } from 'react'
import { useAppDispatch } from './hooks/useAppDispatch'
import { fetchProducts } from './services/fetchProducts'
import TableComponent from './components/TableComponent/TableComponent'
import SearchBar from './components/SearchBar/SearchBar'

function App() {
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(fetchProducts())
	}, [dispatch])

	return (
		<Space className='App' direction='vertical' size='middle'>
			<SearchBar />
			<TableComponent />
		</Space>
	)
}
export default App
