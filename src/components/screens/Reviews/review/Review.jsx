import GridRow from '../../../ui/grid-row/GridRow'
import ImgWrapper from '../../../ui/img-wrapper/ImgWrapper'
import styles from './review.module.scss'

const Review = ({ review }) => {
	return (
		<div className={styles.review}>
			<GridRow>
				<div>
					<h3 className='another-title'>{review.name}</h3>
					{review.imgURL && (
						<div className={styles.img_wrapper}>
							<ImgWrapper src={review.imgURL} alt={'Отзыв'} />
						</div>
					)}
				</div>
				<div>
					<p className='paragraph'>{review.text}</p>
					<span
						className={styles.date}
					>{`${review.time}, ${review.date}`}</span>
				</div>
			</GridRow>
		</div>
	)
}

export default Review
