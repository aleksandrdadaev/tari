import { NavLink } from 'react-router-dom'
import styles from './headerNav.module.scss'
import NavButtons from './nav-buttons/NavButtons'

const Nav = () => {
	const navLinks = [
		{
			id: 1,
			text: 'Специалисты',
			path: '/specialists',
		},
		{
			id: 2,
			text: 'Цены',
			path: '/prices',
		},
		{
			id: 3,
			text: 'Контакты',
			path: '/contacts',
		},
	]

	return (
		<nav className={styles.nav}>
			<NavButtons />
			{navLinks.map(item => (
				<NavLink to={item.path} end className='nav_link' key={item.id}>
					{item.text}
				</NavLink>
			))}
		</nav>
	)
}

export default Nav
