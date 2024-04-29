import ImgWrapper from '../../../ui/img-wrapper/ImgWrapper'
import styles from './profile.module.scss'

const Profile = ({ spec }) => {
	return (
		<section className={styles.profile}>
			<ImgWrapper src={spec.imgURL} alt={spec.name} vertical={true} />
			<div className={styles.info}>
				<div className={styles.text}>
					<h3 className='another-title'>{spec.position}</h3>
					<p className='paragraph'>{spec.text}</p>
				</div>
				<div className={styles.text}>
					<h3 className='another-title'>Награды</h3>
					<ul className={styles.list}>
						{spec.awards.map(award => (
							<li key={award}>
								<p className='paragraph'>{award}</p>
							</li>
						))}
					</ul>
				</div>
				<div className={styles.text}>
					<h3 className='another-title'>Образование</h3>
					<ul className={styles.list}>
						{spec.education.map(education => (
							<li key={education}>
								<p className='paragraph'>{education}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	)
}

export default Profile
