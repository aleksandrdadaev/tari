import FooterBottom from './footer-bottom/FooterBottom'
import FooterNav from './footer-nav/FooterNav'
import FooterTop from './footer-top/FooterTop'
import styles from './footer.module.scss'

const Footer = () => {
	return (
		<footer>
			<div className='container'>
				<div className={styles.footer}>
					<FooterTop />
					<FooterNav />
				</div>
				<FooterBottom />
			</div>
		</footer>
	)
}

export default Footer
