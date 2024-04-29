import { NavLink } from 'react-router-dom'
import styles from './navButton.module.scss'

const NavButton = ({ item, openList, setOpenList }) => {
	const toggleOpenList = () => {
		setOpenList(prev => (prev === item.id ? 0 : item.id))
	}

	const blurOpenList = e => {
		if (e.relatedTarget?.dataset.el === 'header-link') return
		setOpenList(prev => {
			if (prev === item.id) return 0
		})
	}

	const isThisList = openList === item.id

	return (
		<div>
			<button
				className={`nav_link ${styles.button} ${
					isThisList ? styles.button_open : ''
				}`}
				onClick={toggleOpenList}
				onBlur={e => blurOpenList(e)}
			>
				{item.text}
				<div
					className={`${styles.img} ${isThisList ? styles.open : styles.close}`}
				></div>
			</button>

			<div
				className={`${styles.links} ${
					isThisList ? styles.links_open : styles.links_close
				}`}
			>
				{item.childLinks.map(link => (
					<NavLink
						to={link.path}
						className={styles.link}
						data-el={'header-link'}
						onClick={toggleOpenList}
						key={link.text}
					>
						{link.text}
					</NavLink>
				))}
			</div>
		</div>
	)
}

export default NavButton
