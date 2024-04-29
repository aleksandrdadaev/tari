import styles from './vacancy.module.scss'

const Vacancy = ({ vacancy }) => {
	return (
		<div className={styles.vacancy}>
			<h2 className={styles.title}>{vacancy.position}</h2>
			<p className='paragraph'>Что вам предстоит делать:</p>
			<ul className={styles.requirements}>
				{vacancy.requirements.map(requirement => (
					<li key={requirement}>
						<p className='paragraph'>{requirement}</p>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Vacancy
