import ImgWrapper from '../../../ui/img-wrapper/ImgWrapper'
import styles from './degrees.module.scss'

const Degrees = ({ degrees }) => {
	return (
		<section className={styles.section}>
			<h2 className='sub-title'>Дипломы и сертификаты</h2>
			<div className={styles.degrees}>
				{degrees.map(degree => (
					<a href={degree.file} target='_blank' key={degree.id}>
						<ImgWrapper src={degree.scan} alt={degree.title} vertical={true} />
					</a>
				))}
			</div>
		</section>
	)
}

export default Degrees
