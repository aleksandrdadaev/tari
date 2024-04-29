import GridRow from '../../../../ui/grid-row/GridRow'
import ListItem from '../../../../ui/list-item/ListItem'
import List from '../../../../ui/list/List'
import styles from './whyUs.module.scss'

const WhyUs = () => {
	const reasons = [
		{
			id: 1,
			title: 'Отличные специалисты',
			text: 'Несмотря на значительный прогресс медицины в целом и стоматологии в частности, приходится констатировать грустный факт.',
			imgURL: '',
		},
		{
			id: 2,
			title: 'Оборудование и инновации',
			text: 'Несмотря на значительный прогресс медицины в целом и стоматологии в частности, приходится констатировать грустный факт.',
			imgURL: '',
		},
		{
			id: 3,
			title: 'Комфорт и безопасность',
			text: 'Несмотря на значительный прогресс медицины в целом и стоматологии в частности, приходится констатировать грустный факт.',
			imgURL: '',
		},
	]

	return (
		<section>
			<div className='container'>
				<GridRow>
					<h2 className='sub-title'>Почему люди обращаются в ТАРИ</h2>
				</GridRow>
				<List>
					{reasons.map(reason => (
						<ListItem item={reason} key={reason.id} />
					))}
				</List>
			</div>
		</section>
	)
}

export default WhyUs
