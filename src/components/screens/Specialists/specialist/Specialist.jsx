import { Link } from 'react-router-dom'
import ImgWrapper from '../../../ui/img-wrapper/ImgWrapper'
import styles from './specialist.module.scss'

const Specialist = ({ spec }) => {
	return (
		<div className={styles.specialist}>
			<ImgWrapper src={spec.imgURL} alt={spec.name} vertical={true} />
			<div className={styles.info}>
				<div className={styles.text}>
					<h3 className='another-title'>{spec.position}</h3>
					<p className='paragraph'>{spec.name}</p>
					<p className='paragraph'>{spec.text}</p>
				</div>

				<Link to={`/specialists/${spec.id}`} className={styles.link}>
					Подробнее
					<div className={styles.arrow}></div>
				</Link>
			</div>
		</div>
	)
}

export default Specialist
