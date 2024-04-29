import styles from './list.module.scss'

const List = ({ children }) => {
	return <div className={styles.list}>{children}</div>
}

export default List
