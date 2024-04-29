import { useSelector } from 'react-redux'
import styles from './blindMode.module.scss'
import BlindModeButton from './button/BlindModeButton'
import { useActions } from '../../../../hooks/useActions'

const fontSizes = [
	{
		id: 1,
		bgImageUrl: '/src/assets/icons/blind-mode/font-size/100.svg',
	},
	{
		id: 2,
		bgImageUrl: '/src/assets/icons/blind-mode/font-size/150.svg',
	},
	{
		id: 3,
		bgImageUrl: '/src/assets/icons/blind-mode/font-size/200.svg',
	},
]

const colorThemes = [
	{
		id: 1,
		bgColor: '#fff',
		bgImageUrl: '/src/assets/icons/blind-mode/colors/white-black.svg',
	},
	{
		id: 2,
		bgColor: '#000',
		bgImageUrl: '/src/assets/icons/blind-mode/colors/black-white.svg',
	},
	{
		id: 3,
		bgColor: '#000',
		bgImageUrl: '/src/assets/icons/blind-mode/colors/black-green.svg',
	},
]

const BlindMode = () => {
	const { blindMode } = useSelector(state => state)

	const { changeFontSize, changeColorTheme, toggleImages } = useActions()

	return (
		<div className={styles.wrapper}>
			<div className={styles.buttonsWrapper}>
				<span className={styles.span}>Шрифт</span>
				<div className={styles.buttons}>
					{fontSizes.map(fz => (
						<BlindModeButton
							blindMode={blindMode}
							id={fz.id}
							fontSize={true}
							bgColor={'#fff'}
							bgImageUrl={fz.bgImageUrl}
							key={fz.id}
							clickHandler={() => changeFontSize(fz.id)}
						/>
					))}
				</div>
			</div>
			<div className={styles.buttonsWrapper}>
				<span className={styles.span}>Цвет</span>
				<div className={styles.buttons}>
					{colorThemes.map(theme => (
						<BlindModeButton
							blindMode={blindMode}
							id={theme.id}
							bgColor={theme.bgColor}
							bgImageUrl={theme.bgImageUrl}
							key={theme.id}
							clickHandler={() => changeColorTheme(theme.id)}
						/>
					))}
				</div>
			</div>
			<div className={styles.buttonsWrapper}>
				<input
					type='checkbox'
					checked={blindMode.images}
					onChange={() => toggleImages()}
				/>
				<span className={styles.span}>Изображения</span>
			</div>
		</div>
	)
}

export default BlindMode
