import styles from './styles.module.scss'

const Price = ({ price }) => {
	return (
		<div>
			<h2 className={styles.price}>{price.name}</h2>
			<a href={price.file} target='_blank' className='document_link'>
				<p className='paragraph'>Ссылка на прайс-лист</p>
			</a>
		</div>
	)
}

export default Price
