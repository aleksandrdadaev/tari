import styles from './cards.module.scss'

const Cards = ({ children }) => {
	return <div className={styles.cards}>{children}</div>
}

export default Cards
