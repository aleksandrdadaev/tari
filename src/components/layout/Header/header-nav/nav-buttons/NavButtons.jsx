import { useState } from 'react'
import styles from '../headerNav.module.scss'
import NavButton from '../nav-button/NavButton'

const NavButtons = () => {
	const navButtons = [
		{
			id: 1,
			text: 'О клинике',
			childLinks: [
				{ text: 'Отзывы', path: '/reviews' },
				{ text: 'Оборудование', path: '/equipments' },
				{ text: 'Вакансии', path: '/job' },
				{ text: 'Медицинская документация', path: '/documentation' },
				{ text: 'Важная информация', path: '/information' },
				{ text: 'Анкета о вашем здоровье', path: '/questionnaire' },
			],
		},
		{
			id: 2,
			text: 'Услуги',
			childLinks: [
				{ text: 'Цены', path: '/prices' },
				{ text: 'Лечение и профилактика', path: '/services/1' },
				{ text: 'Протезирование и имплантация', path: '/services/2' },
			],
		},
	]

	const [openList, setOpenList] = useState(0)

	return (
		<div className={styles.nav}>
			{navButtons.map(button => (
				<NavButton
					item={button}
					openList={openList}
					setOpenList={setOpenList}
					key={button.id}
				/>
			))}
		</div>
	)
}

export default NavButtons
