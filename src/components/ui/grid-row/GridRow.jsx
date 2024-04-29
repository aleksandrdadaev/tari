import styles from './gridRow.module.scss'

const GridRow = ({ children }) => {
	return <div className={styles.row}>{children}</div>
}

export default GridRow
