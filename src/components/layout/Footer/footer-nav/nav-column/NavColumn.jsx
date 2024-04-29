import NavLink from './nav-link/NavLink'
import styles from './navColumn.module.scss'

const NavColumn = ({ column }) => {
	return (
		<div>
			<span className={styles.title}>{column.title}</span>
			<ul className={styles.child_column}>
				{column.links.map(link => (
					<li key={link.text}>
						<NavLink link={link} />
					</li>
				))}
			</ul>
		</div>
	)
}

export default NavColumn
