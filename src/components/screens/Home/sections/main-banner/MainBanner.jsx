import ButtonCard from '../../../../ui/button-card/ButtonCard'
import Cards from '../../../../ui/cards/Cards'
import GridRow from '../../../../ui/grid-row/GridRow'
import LinkCard from '../../../../ui/link-card/LinkCard'
import styles from './mainBanner.module.scss'

const MainBanner = () => {
	const links = [
		{
			path: '/prices',
			title: 'Цены',
			text: 'Качественные стоматологические услуги от лучших специалистов Москвы',
		},
		{
			path: '/therapy',
			title: 'Лечение и профилактика',
			text: 'Качественные стоматологические услуги от лучших специалистов Москвы',
		},
		{
			path: '/specialists',
			title: 'Специалисты',
			text: 'Качественные стоматологические услуги от лучших специалистов Москвы',
		},
	]

	const button = {
		title: 'Записаться на приём',
		text: 'Качественные стоматологические услуги от лучших специалистов Москвы',
		clickHandler: '',
	}

	return (
		<section>
			<div className='container'>
				<h1 className='main-title'>Красивая улыбка по доступной цене</h1>
				<div className={styles.info_wrapper}>
					<GridRow>
						<div className={styles.info}>
							<p className='paragraph'>
								Качественные стоматологические услуги от лучших специалистов
								Москвы
							</p>
						</div>
					</GridRow>
				</div>
				<Cards>
					{links.map(link => (
						<LinkCard link={link} key={link.title} />
					))}
					<ButtonCard button={button} />
				</Cards>
			</div>
		</section>
	)
}

export default MainBanner
