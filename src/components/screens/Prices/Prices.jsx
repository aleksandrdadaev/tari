import GridRow from '../../ui/grid-row/GridRow'
import Price from './price/Price'
import styles from './prices.module.scss'

const Prices = () => {
	const priceList = [
		{
			id: 1,
			name: 'Терапия',
			file: '',
		},
		{
			id: 2,
			name: 'Терапия',
			file: '',
		},
	]

	return (
		<div className='container'>
			<h1 className='main-title'>Цены</h1>
			<div className={styles.wrapper}>
				<GridRow>
					<div className='info'>
						<p className='paragraph'>
							Краткий прейскурант на медицинские услуги ООО «ТАРИ»
						</p>
					</div>
				</GridRow>
			</div>
			<section className={styles.prices}>
				{priceList.map(price => (
					<Price price={price} key={price.id} />
				))}
			</section>
		</div>
	)
}

export default Prices
