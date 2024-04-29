import GridRow from '../../ui/grid-row/GridRow'
import styles from './contacts.module.scss'

const Contacts = () => {
	return (
		<div className='container'>
			<h1 className='main-title'>Контакты</h1>
			<GridRow>
				<div className={styles.contacts}>
					<h3 className='another-title'>ул. Комсомольская, 13</h3>
					<a href='tel:+73243243434'>
						<h3 className='another-title'>8 (324) 324-34-34</h3>
					</a>
					<p className='paragraph'>Пн-Пт: 9:00 — 20:00</p>
				</div>
			</GridRow>
		</div>
	)
}

export default Contacts
