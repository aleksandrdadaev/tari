import GridRow from '../../ui/grid-row/GridRow'
import styles from './questionnaire.module.scss'

const Questionnaire = () => {
	return (
		<section className='container'>
			<h1 className='main-title'>Анкета о вашем здоровье</h1>
			<GridRow>
				<div className={styles.wrapper}>
					<p className='paragraph'>
						Сообщенные Вами сведения позволят врачу подобрать эффективную
						анестезию, лекарства и методы лечения, правильно составить план.
						Врач пояснит (в оправданных случаях): есть ли связь между Вашим
						общим здоровьем и состоянием полости рта.По каждому пункту анкеты
						надо отвечать ДА или НЕТ. Ваши данные составляют врачебную тайну, и
						не будут доступны посторонним лицам.
					</p>
					<button className='green-button'>Скачать анкету</button>
				</div>
			</GridRow>
		</section>
	)
}

export default Questionnaire
