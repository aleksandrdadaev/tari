import GridRow from '../../../../ui/grid-row/GridRow'
import styles from './mainSlider.module.scss'

const MainSlider = () => {
	return (
		<section>
			<div className='container'>
				<div className={styles.text}>
					<GridRow>
						<h2 className='sub-title'>Стоматологическая клиника ТАРИ</h2>
						<p className='paragraph'>
							Мы заботимся о здоровье и красоте людей, оказывая качественную
							стоматологическую помощь с максимальным комфортом для каждого
							пациента. Ежегодно наши добрые и чуткие доктора помогают тысячам
							пациентов забыть о боли и неприятностях, снова беззаботно смеяться
							и наслаждаться вкусом любимых блюд!
						</p>
					</GridRow>
				</div>
			</div>
		</section>
	)
}

export default MainSlider
