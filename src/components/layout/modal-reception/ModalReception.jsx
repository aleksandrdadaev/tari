import { useActions } from '../../../hooks/useActions'
import styles from './styles.module.scss'

const ModalReception = () => {
	const { closeReception } = useActions()

	return (
		<div className='modal-bg'>
			<div className='modal'>
				<button
					className='modal-close'
					onClick={() => closeReception()}
				></button>
				<h2 className='modal-title'>Записаться на приём</h2>
				<div className={styles.info}>
					<p className={styles.paragraph}>
						Звоните по телефону —{' '}
						<a href='tel:89001002020' className='form-link'>
							8 (900) 100-20-20
						</a>
					</p>
					<p className={styles.paragraph}>
						Мы работаем с понедельника по пятницу с 8:00 до 18:00
					</p>
				</div>
			</div>
		</div>
	)
}

export default ModalReception
