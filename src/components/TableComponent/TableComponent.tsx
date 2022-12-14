import { FC } from 'react'
import { Table } from 'antd'
import Footer from '../Footer/Footer'
import type { ColumnsType } from 'antd/es/table'
import { IProduct } from '../../types/IProduct'
import { useAppSelector } from '../../hooks/useAppSelector'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { setSelectedProducts } from '../../store/productsSlice'

const TableComponent: FC = () => {
	const dispatch = useAppDispatch()
	const dataSource: IProduct[] = useAppSelector(state => state.products.products)
	const searchQuery = useAppSelector(state => state.products.searchQuery)

	const rowSelection = {
		onChange: (selectedRowKeys: React.Key[], selectedRows: IProduct[]) => {
			dispatch(setSelectedProducts(selectedRows))
		},
	}

	const columns: ColumnsType<IProduct> = [
		{
			title: 'Наименование',
			dataIndex: 'name',
			key: 'name',
			filteredValue: [searchQuery],
			onFilter: (value: string | number | boolean, record: IProduct) => 
        String(Object.values(record)).toLowerCase().includes(String(value).toLowerCase()),
		},
		{
			title: 'Дата доставки',
			dataIndex: 'delivery_date',
			key: 'delivery_date',
		},
		{
			title: 'Сумма',
			dataIndex: 'sum',
			key: 'sum',
		},
		{
			title: 'Валюта',
			dataIndex: 'currency',
			key: 'currency',
		},
		{
			title: 'Количество',
			dataIndex: 'qty',
			key: 'qty',
		},
		{
			title: 'Объем',
			dataIndex: 'volume',
			key: 'volume',
		},
		{
			title: 'Статус',
			dataIndex: 'status',
			key: 'status',
			render: text => <p style={{ color: text === 'active' ? 'limegreen' : 'gray' }}>{text}</p>,
		},
		{
			title: 'Всего',
			dataIndex: 'total',
			key: 'total',
			render: (text, row) => <p>{`${row.sum + row.qty} ${row.currency}`}</p>,
		},
	]

	return (
		<Table
			columns={columns}
			dataSource={dataSource}
			rowKey='id'
			bordered
			rowSelection={{
				type: 'checkbox',
				...rowSelection,
			}}
			pagination={false}
			footer={() => <Footer />}
		/>
	)
}

export default TableComponent
