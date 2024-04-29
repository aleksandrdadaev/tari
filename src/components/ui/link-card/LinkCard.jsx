import { Link } from 'react-router-dom'
import styles from './linkCard.module.scss'

const LinkCard = ({ link }) => {
	return (
		<Link to={link.path} className={styles.card}>
			<div className={styles.title}>{link.title}</div>
			<p className='paragraph'>{link.text}</p>
			<div className={styles.arrow}></div>
		</Link>
	)
}

export default LinkCard
