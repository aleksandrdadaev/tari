import ListItem from '../../ui/list-item/ListItem'
import List from '../../ui/list/List'
import styles from './equipments.module.scss'

const Equipment = () => {
	const equipments = [
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
		<div className={`container ${styles.title}`}>
			<h1 className='main-title'>Оборудование</h1>
			<List>
				{equipments.map(equip => (
					<ListItem item={equip} key={equip.id} />
				))}
			</List>
		</div>
	)
}

export default Equipment
