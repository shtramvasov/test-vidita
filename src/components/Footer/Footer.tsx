import { FC, useEffect, useState } from 'react'
import { Button, Modal } from 'antd'
import { useAppSelector } from '../../hooks/useAppSelector'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { setTotalQuantiny, setTotalVolume } from '../../store/productsSlice'
import { postProducts } from '../../services/postProducts'

const Footer: FC = () => {
	const products = useAppSelector(state => state.products.products)
  const totalQuantity = useAppSelector(state => state.products.totalQuantiny)
  const totalVolume = useAppSelector(state => state.products.totalVolume)
  const selectedProducts = useAppSelector(state => state.products.selectedProducts)
	const dispatch = useAppDispatch()

	const calcTotalQuantiny = products.reduce((acc, product) => acc + product.qty, 0)
	const calcTotalVolume = products.reduce((acc, product) => acc + product.volume, 0)

  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => setIsModalOpen(true)
  const handleCancel = () => setIsModalOpen(false)

  const handleOk = () => {
    setIsModalOpen(false)
    postProducts('/cancel', {productIds: selectedProducts.map(product => product.id)})
  }

	useEffect(() => {
		dispatch(setTotalQuantiny(calcTotalQuantiny))
		dispatch(setTotalVolume(calcTotalVolume))
	}, [calcTotalQuantiny, calcTotalVolume])

	return (
		<footer>
			<div>
				<p>Общий объем: {totalVolume}</p>
				<p>Общее количество: {totalQuantity}</p>
			</div>
			<div>
				<Button 
          disabled={selectedProducts.length == 0} 
          type='primary' 
          onClick={showModal}
        >
          Аннулировать
        </Button>
        <Modal 
          title='Вы уверены что хотите аннулировать товар(ы):' 
          open={isModalOpen} 
          footer={[
            <Button key='submit' type='primary' onClick={handleOk}>Применить</Button>,
            <Button key='cancel' onClick={handleCancel}>Отклонить</Button>
          ]}
          onCancel={handleCancel}
        >
          {selectedProducts.map((product, index) =>  (
            <span key={product.id}>{(index ? ', ' : '') + product.name}</span>
          ))}
        </Modal>
			</div>
		</footer>
	)
}

export default Footer
