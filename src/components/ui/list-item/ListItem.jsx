import GridRow from '../grid-row/GridRow'
import ImgWrapper from '../img-wrapper/ImgWrapper'

const ListItem = ({ item }) => {
	return (
		<GridRow>
			<ImgWrapper src={item.imgURL} alt={item.title} />
			<div>
				<h3 className='another-title'>{item.title}</h3>
				<p className='paragraph'>{item.text}</p>
			</div>
		</GridRow>
	)
}

export default ListItem
