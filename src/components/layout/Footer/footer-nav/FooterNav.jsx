import styles from './footerNav.module.scss'
import NavColumn from './nav-column/NavColumn'

const FooterNav = () => {
	const navItems = [
		{
			title: 'О клинике',
			links: [
				{ text: 'Отзывы', path: '/reviews' },
				{ text: 'Оборудование', path: '/equipments' },
				{ text: 'Вакансии', path: 'job' },
				{ text: 'Медицинская документация', path: '/documentation' },
				{ text: 'Важная информация', path: '/information' },
				{ text: 'Анкета о вашем здоровье', path: '/questionnaire' },
				{ text: 'Специалисты', path: '/specialists' },
			],
		},
		{
			title: 'Услуги',
			links: [
				{ text: 'Цены', path: '/prices' },
				{ text: 'Лечение и профилактика', path: '/therapy' },
				{ text: 'Протезирование', path: '/services' },
			],
		},
		{
			title: 'Контакты',
			links: [
				{ text: 'Адрес: Москва, Пушкина 17' },
				{ text: 'Телефон: 8 (900) 100-19-45' },
			],
		},
	]

	return (
		<nav className={styles.nav}>
			{navItems.map(column => (
				<NavColumn key={column.title} column={column} />
			))}
		</nav>
	)
}

export default FooterNav
