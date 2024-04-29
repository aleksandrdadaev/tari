import { Link } from 'react-router-dom'
import styles from './navLink.module.scss'

const NavLink = ({ link }) => {
	if (link.path) {
		return (
			<Link to={link.path} className={styles.link}>
				{link.text}
			</Link>
		)
	} else {
		const string = link.text.split(': ')

		return (
			<p className={styles.link}>
				<span>{`${string[0]}: `}</span>
				{string[1]}
			</p>
		)
	}
}

export default NavLink
