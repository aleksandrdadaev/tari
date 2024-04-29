import '/src/assets/styles/global.scss'

import { BrowserRouter } from 'react-router-dom'
import Router from '../Router'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import styles from './layout.module.scss'
import ModalJob from './modal-job/ModalJob'
import { useEffect } from 'react'
import ModalReview from './modal-review/ModalReview'
import ModalReception from './modal-reception/ModalReception'
import { useSelector } from 'react-redux'

const Layout = () => {
	const { blindMode, modals } = useSelector(state => state)

	useEffect(() => {
		if (blindMode.active) {
			const fontSize = `var(--font-size-theme${blindMode.fontSize})`
			const fontColor = `var(--font-color-theme${blindMode.colorTheme})`
			const backgroundColor = `var(--background-color-theme${blindMode.colorTheme})`
			const borderColor = `var(--border-color-theme${blindMode.colorTheme})`

			document.body.style.setProperty('--font-size', fontSize)
			document.body.style.setProperty('--font-color', fontColor)
			document.body.style.setProperty('--background-color', backgroundColor)
			document.body.style.setProperty('--border-color', borderColor)
		} else {
			document.body.style.setProperty('--font-size', 1)
		}
	}, [blindMode])

	return (
		<BrowserRouter>
			<div
				className={`${styles.layout} ${blindMode.active ? styles.theme : ''}`}
			>
				<Header />
				<main className={styles.main}>
					<Router />
				</main>
				<Footer />
				{modals.job && <ModalJob />}
				{modals.review && <ModalReview />}
				{modals.reception && <ModalReception />}
			</div>
		</BrowserRouter>
	)
}

export default Layout
