import { useActions } from '../../../../hooks/useActions'
import Logo from '../../../ui/logo/Logo'
import styles from './footerTop.module.scss'

const FooterTop = () => {
	const { openReception } = useActions()

	return (
		<div className={styles.footer_top}>
			<div className={styles.company}>
				<Logo />
				<h3 className={styles.title}>Стоматологическая клиника «ТАРИ»</h3>
			</div>
			<button className='green-button' onClick={() => openReception()}>
				Записаться на приём
			</button>
		</div>
	)
}

export default FooterTop
