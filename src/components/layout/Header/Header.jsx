import Logo from '../../ui/logo/Logo'
import styles from './header.module.scss'
import HeaderNav from './header-nav/HeaderNav'
import Search from './search/Search'
import { useState } from 'react'
import BlindMode from './blind-mode/BlindMode'
import { useSelector } from 'react-redux'
import { useActions } from '../../../hooks/useActions'

const Header = () => {
	const [open, setOpen] = useState(window.innerWidth < 1600 ? false : true)

	const { blindMode } = useSelector(state => state)

	const { toggleBlindMode, openReception } = useActions()

	return (
		<header>
			<div className='container'>
				{blindMode.active && <BlindMode />}
				<div className={`${styles.header} ${!open ? styles.header_close : ''}`}>
					{open && <Search />}
					{open && (
						<div className={styles.buttons}>
							<a className={styles.button} href='#'>
								Карта сайта
							</a>
							<button
								className={styles.button}
								onClick={() => toggleBlindMode()}
							>
								{blindMode.active ? 'Обычная версия' : 'Режим для слабовидящих'}
							</button>
						</div>
					)}
					<Logo />
					{open && <HeaderNav />}
					<button className='green-button' onClick={() => openReception()}>
						Записаться на приём
					</button>
					<button
						className={`${styles.burger} ${open ? styles.burger_close : ''}`}
						onClick={() => setOpen(prev => !prev)}
					>
						<span></span>
					</button>
				</div>
			</div>
		</header>
	)
}

export default Header
