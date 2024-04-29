import styles from './reviews.module.scss'
import Review from './review/Review'
import GridRow from '../../ui/grid-row/GridRow'
import { useActions } from '../../../hooks/useActions'

const Reviews = () => {
	const { openReview } = useActions()

	const reviews = [
		{
			id: 1,
			name: 'Потанин Николай',
			text: 'Добрый день, делали сегодня зубки дочке 2,5 спасибо вам больше, все прошло хорошо, клиника на высшем уровне, врачи очень хорошие, зубки спасли',
			time: '17:03',
			date: '30.03.2023',
			imgURL: '/',
		},
		{
			id: 2,
			name: 'Потанин Николай',
			text: 'Добрый день, делали сегодня зубки дочке 2,5 спасибо вам больше, все прошло хорошо, клиника на высшем уровне, врачи очень хорошие, зубки спасли',
			time: '17:03',
			date: '30.03.2023',
		},
		{
			id: 3,
			name: 'Потанин Николай',
			text: 'Добрый день, делали сегодня зубки дочке 2,5 спасибо вам больше, все прошло хорошо, клиника на высшем уровне, врачи очень хорошие, зубки спасли',
			time: '17:03',
			date: '30.03.2023',
			imgURL: '/',
		},
		{
			id: 4,
			name: 'Потанин Николай',
			text: 'Добрый день, делали сегодня зубки дочке 2,5 спасибо вам больше, все прошло хорошо, клиника на высшем уровне, врачи очень хорошие, зубки спасли',
			time: '17:03',
			date: '30.03.2023',
		},
	]
	return (
		<div className='container'>
			<h1 className='main-title'>Отзывы</h1>
			<div className='info_wrapper'>
				<GridRow>
					<div className='info'>
						<p className='paragraph'>
							Вы можете оставить отзыв и высказать пожелания, если вы
							пользовались услугами нашей клиники
						</p>
						<button className='green-button' onClick={() => openReview()}>
							Оставить отзыв
						</button>
					</div>
				</GridRow>
			</div>
			<section className={styles.reviews}>
				{reviews.map(review => (
					<Review review={review} key={review.id} />
				))}
			</section>
		</div>
	)
}

export default Reviews
