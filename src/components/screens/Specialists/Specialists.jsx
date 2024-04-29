import Specialist from './specialist/Specialist'

import styles from './specialists.module.scss'

const Specialists = () => {
	const specialists = [
		{
			id: 1,
			name: 'Алексеев Алексей Михайлович',
			position: 'Врач-дантолог',
			text: 'Виниры — это фарфоровые или композитные пластинки толщиной 0,5-0,7 мм. Их устанавливают на переднюю поверхность зуба — получается своеобразная облицовка. Главное достоинство виниров заключается в том, что они восстанавливают эстетичный вид зуба. Времени на изготовление виниров требуется меньше. Чем, например, для коронок, а результат — восстановленные зубы.',
			imgURL: '',
		},
		{
			id: 2,
			name: 'Алексеев Алексей Михайлович',
			position: 'Врач-дантолог',
			text: 'Виниры — это фарфоровые или композитные пластинки толщиной 0,5-0,7 мм. Их устанавливают на переднюю поверхность зуба — получается своеобразная облицовка. Главное достоинство виниров заключается в том, что они восстанавливают эстетичный вид зуба. Времени на изготовление виниров требуется меньше. Чем, например, для коронок, а результат — восстановленные зубы.',
			imgURL: '',
		},
		{
			id: 3,
			name: 'Алексеев Алексей Михайлович',
			position: 'Врач-дантолог',
			text: 'Виниры — это фарфоровые или композитные пластинки толщиной 0,5-0,7 мм. Их устанавливают на переднюю поверхность зуба — получается своеобразная облицовка. Главное достоинство виниров заключается в том, что они восстанавливают эстетичный вид зуба. Времени на изготовление виниров требуется меньше. Чем, например, для коронок, а результат — восстановленные зубы.',
			imgURL: '',
		},
		{
			id: 4,
			name: 'Алексеев Алексей Михайлович',
			position: 'Врач-дантолог',
			text: 'Виниры — это фарфоровые или композитные пластинки толщиной 0,5-0,7 мм. Их устанавливают на переднюю поверхность зуба — получается своеобразная облицовка. Главное достоинство виниров заключается в том, что они восстанавливают эстетичный вид зуба. Времени на изготовление виниров требуется меньше. Чем, например, для коронок, а результат — восстановленные зубы.',
			imgURL: '',
		},
	]

	return (
		<div className='container'>
			<h1 className='main-title'>Специалисты</h1>
			<section className={styles.specialists}>
				{specialists.map(spec => (
					<Specialist spec={spec} key={spec.id} />
				))}
			</section>
		</div>
	)
}

export default Specialists
