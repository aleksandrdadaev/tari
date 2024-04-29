import styles from '../link-card/linkCard.module.scss'
import styles2 from './buttonCard.module.scss'

const ButtonCard = ({ button }) => {
	return (
		<button className={`${styles.card} ${styles2.button}`}>
			<div className={styles.title}>{button.title}</div>
			<p className='paragraph'>{button.text}</p>
			<div className={styles.arrow}></div>
		</button>
	)
}

export default ButtonCard
