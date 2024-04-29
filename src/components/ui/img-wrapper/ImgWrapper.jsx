import { useSelector } from 'react-redux'
import styles from './imgWrapper.module.scss'

const ImgWrapper = ({ src, alt, vertical }) => {
	const { blindMode } = useSelector(state => state)

	const isDisable = blindMode.active && !blindMode.images

	if (isDisable) src = ''

	return (
		<div
			className={`${styles.img_wrapper} ${
				vertical ? styles.vertical : styles.horizontal
			} ${isDisable ? styles.disable : ''}`}
		>
			<img src={src} alt={alt} className={styles.img} />
		</div>
	)
}

export default ImgWrapper
