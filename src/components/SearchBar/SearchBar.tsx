import { FC } from 'react'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { setSearchQuery } from '../../store/productsSlice'

const SearchBar: FC = () => {
	const dispatch = useAppDispatch()

	return (
		<Input
			size='large'
			placeholder='Поиск...'
			prefix={<SearchOutlined />}
			onChange={e => dispatch(setSearchQuery(e.target.value))}
		/>
	)
}

export default SearchBar
