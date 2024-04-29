import styles from './BlindModeButton.module.scss'

const BlindModeButton = ({
	id,
	fontSize = false,
	bgColor,
	bgImageUrl,
	clickHandler,
	blindMode,
}) => {
	const currentTheme = fontSize ? blindMode.fontSize : blindMode.colorTheme

	return (
		<button
			className={`${styles.button} ${currentTheme === id ? styles.active : ''}`}
			style={{
				backgroundColor: bgColor,
				backgroundImage: `url(${bgImageUrl})`,
			}}
			onClick={clickHandler}
		></button>
	)
}

export default BlindModeButton
