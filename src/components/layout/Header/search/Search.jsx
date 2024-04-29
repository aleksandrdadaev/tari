import styles from './search.module.scss'

const Search = () => {
	return (
		<div className={styles.search}>
			<input
				type='text'
				placeholder='Поиск...'
				className={styles.search_input}
			/>
			<button className={styles.search_button}></button>
		</div>
	)
}

export default Search
